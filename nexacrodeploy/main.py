#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Nexacro Deploy - 자동 배포 스크립트

사용법:
    python main.py                     # geninfo 자동 파싱하여 실행
    python main.py --dry-run           # 명령어만 출력 (실행 안함)
    python main.py nexacroDeploy.json  # 기존 JSON 설정 방식
"""

import os
import sys
import json
import subprocess
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import Dict, Optional


# ============================================================================
# 상수 정의
# ============================================================================

# 기본 프로젝트 경로 (상대 경로)
DEFAULT_PROJECT_PATH = "../NexaroDesktopDMI/NexaroDesktopDMI.xprj"

# 기본 출력 경로 (상대 경로)
DEFAULT_OUTPUT_PATH = "../NexaroDesktopDMI_output"

# 기본 geninfo 파일 경로 (상대 경로)
DEFAULT_GENINFO_PATH = "../NexaroDesktopDMI/$Geninfo$.geninfo"


# ============================================================================
# Geninfo 파서 클래스
# ============================================================================

class GeninfoParser:
    """
    $Geninfo$.geninfo 파일을 파싱하여 배포에 필요한 정보를 추출하는 클래스
    """
    
    def __init__(self, geninfo_path: str):
        """
        GeninfoParser 초기화
        
        Args:
            geninfo_path: geninfo 파일 경로
        """
        self.geninfo_path = Path(geninfo_path).resolve()
        
        if not self.geninfo_path.exists():
            raise FileNotFoundError(f"geninfo 파일을 찾을 수 없습니다: {self.geninfo_path}")
        
        self.tree = ET.parse(self.geninfo_path)
        self.root = self.tree.getroot()
        
        # Info 엘리먼트 찾기
        self.info_element = self.root.find(".//Info")
        if self.info_element is None:
            raise ValueError("geninfo 파일에서 Info 엘리먼트를 찾을 수 없습니다.")
        
        # 첫 번째 .json URL 캐싱
        self._first_json_url: Optional[str] = None
        self._sdk_path: Optional[str] = None
        self._nexacro_base: Optional[str] = None
    
    def get_first_json_url(self) -> str:
        """첫 번째 절대 경로 .json으로 끝나는 File url 반환"""
        if self._first_json_url is not None:
            return self._first_json_url
        
        for file_elem in self.info_element.findall("File"):
            url = file_elem.get("url", "")
            # .json으로 끝나고 절대 경로인 것만 (드라이브 문자 또는 UNC 경로)
            if url.lower().endswith(".json") and (len(url) > 2 and url[1] == ':'):
                self._first_json_url = url
                return url
        
        raise ValueError("geninfo 파일에서 절대 경로 .json URL을 찾을 수 없습니다.")
    
    def extract_nexacro_base(self) -> str:
        """URL에서 'Nexacro N\\' 경로까지 추출"""
        if self._nexacro_base is not None:
            return self._nexacro_base
        
        json_url = self.get_first_json_url()
        
        # "Nexacro N\" 문자열 찾기
        marker = "Nexacro N\\"
        idx = json_url.find(marker)
        
        if idx == -1:
            # 대소문자 구분 없이 다시 시도
            marker_lower = "nexacro n\\"
            idx = json_url.lower().find(marker_lower)
            if idx == -1:
                raise ValueError(f"URL에서 'Nexacro N' 경로를 찾을 수 없습니다: {json_url}")
        
        self._nexacro_base = json_url[:idx + len(marker)]
        return self._nexacro_base
    
    def extract_sdk_path(self) -> str:
        """URL에서 SDK 경로 추출 (nexacrolib 앞까지)"""
        if self._sdk_path is not None:
            return self._sdk_path
        
        json_url = self.get_first_json_url()
        
        # "nexacrolib\" 문자열 찾기
        marker = "nexacrolib\\"
        idx = json_url.lower().find(marker.lower())
        
        if idx == -1:
            raise ValueError(f"URL에서 'nexacrolib' 경로를 찾을 수 없습니다: {json_url}")
        
        self._sdk_path = json_url[:idx]
        return self._sdk_path
    
    def get_exe_path(self) -> str:
        """nexacrodeploy.exe 경로 반환"""
        nexacro_base = self.extract_nexacro_base()
        return os.path.join(nexacro_base, "Tools", "nexacrodeploy.exe")
    
    def get_project_folder(self) -> str:
        """geninfo에서 project 속성 반환"""
        return self.info_element.get("project", "")
    
    def get_project_path(self) -> str:
        """project 폴더에서 .xprj 파일 찾아 반환"""
        project_folder = self.get_project_folder()
        
        if not project_folder:
            raise ValueError("geninfo 파일에서 project 속성을 찾을 수 없습니다.")
        
        project_dir = Path(project_folder)
        
        if not project_dir.exists():
            raise FileNotFoundError(f"프로젝트 폴더를 찾을 수 없습니다: {project_dir}")
        
        # .xprj 파일 찾기
        xprj_files = list(project_dir.glob("*.xprj"))
        
        if not xprj_files:
            raise FileNotFoundError(f"프로젝트 폴더에서 .xprj 파일을 찾을 수 없습니다: {project_dir}")
        
        return str(xprj_files[0])
    
    def get_output_path(self) -> str:
        """geninfo에서 generated 속성 반환"""
        generated = self.info_element.get("generated", "")
        
        if not generated:
            raise ValueError("geninfo 파일에서 generated 속성을 찾을 수 없습니다.")
        
        return generated
    
    def get_nexacrolib_path(self) -> str:
        """-B 옵션 값 반환 (SDK경로 + nexacrolib)"""
        sdk_path = self.extract_sdk_path()
        return os.path.join(sdk_path, "nexacrolib")
    
    def get_generaterule_path(self) -> str:
        """-GENERATERULE 옵션 값 반환 (SDK경로 + generate)"""
        sdk_path = self.extract_sdk_path()
        return os.path.join(sdk_path, "generate")
    
    def get_all_paths(self) -> Dict[str, str]:
        """모든 경로 정보를 딕셔너리로 반환"""
        return {
            "exe_path": self.get_exe_path(),
            "project_path": self.get_project_path(),
            "output_path": self.get_output_path(),
            "nexacrolib_path": self.get_nexacrolib_path(),
            "generaterule_path": self.get_generaterule_path(),
        }


# ============================================================================
# 설정 관리 클래스
# ============================================================================

class DeployConfig:
    """
    배포 설정을 관리하는 클래스
    
    nexacroDeploy.json 파일을 읽어서 설정값을 제공합니다.
    """
    
    def __init__(self, config_path: str):
        """
        DeployConfig 초기화
        
        Args:
            config_path: 설정 파일 경로
        """
        self.config_path = Path(config_path).resolve()
        self.config = self._load_config()
    
    def _load_config(self) -> Dict:
        """설정 파일 로드"""
        if not self.config_path.exists():
            raise FileNotFoundError(f"설정 파일을 찾을 수 없습니다: {self.config_path}")
        
        with open(self.config_path, "r", encoding="utf-8") as f:
            return json.load(f)
    
    @property
    def exe_path(self) -> str:
        """nexacrodeploy.exe 실행 파일 경로"""
        return self.config.get("nexacroDeployExecute", "")
    
    @property
    def nexacrolib_path(self) -> str:
        """-B 옵션: nexacrolib 경로"""
        return self.config.get("-B", "")
    
    @property
    def generaterule_path(self) -> str:
        """-GENERATERULE 옵션: generate 규칙 경로"""
        return self.config.get("-GENERATERULE", "")
    
    @property
    def project_path(self) -> str:
        """-P 옵션: 프로젝트 경로 (없으면 기본값 사용)"""
        return self.config.get("-P", DEFAULT_PROJECT_PATH)
    
    @property
    def output_path(self) -> str:
        """-O 옵션: 출력 경로 (없으면 기본값 사용)"""
        return self.config.get("-O", DEFAULT_OUTPUT_PATH)
    
    def validate(self) -> bool:
        """설정 유효성 검사"""
        required_keys = ["nexacroDeployExecute", "-B", "-GENERATERULE"]
        missing_keys = [key for key in required_keys if not self.config.get(key)]
        
        if missing_keys:
            print(f"[오류] 필수 설정이 누락되었습니다: {missing_keys}")
            return False
        
        return True


# ============================================================================
# 배포 실행 클래스
# ============================================================================

class NexacroDeploy:
    """
    Nexacro 배포를 실행하는 클래스
    """
    
    def __init__(self, exe_path: str, project_path: str, output_path: str,
                 nexacrolib_path: str, generaterule_path: str):
        """
        NexacroDeploy 초기화
        
        Args:
            exe_path: nexacrodeploy.exe 경로
            project_path: 프로젝트 파일 경로
            output_path: 출력 경로
            nexacrolib_path: nexacrolib 경로
            generaterule_path: generate 규칙 경로
        """
        self.exe_path = exe_path
        self.project_path = project_path
        self.output_path = output_path
        self.nexacrolib_path = nexacrolib_path
        self.generaterule_path = generaterule_path
    
    @classmethod
    def from_config(cls, config: DeployConfig) -> "NexacroDeploy":
        """DeployConfig에서 NexacroDeploy 생성"""
        # 상대 경로를 절대 경로로 변환
        base_dir = config.config_path.parent
        
        project_path = config.project_path
        if not Path(project_path).is_absolute():
            project_path = str((base_dir / project_path).resolve())
        
        output_path = config.output_path
        if not Path(output_path).is_absolute():
            output_path = str((base_dir / output_path).resolve())
        
        return cls(
            exe_path=config.exe_path,
            project_path=project_path,
            output_path=output_path,
            nexacrolib_path=config.nexacrolib_path,
            generaterule_path=config.generaterule_path,
        )
    
    @classmethod
    def from_geninfo(cls, geninfo_path: str) -> "NexacroDeploy":
        """GeninfoParser에서 NexacroDeploy 생성"""
        parser = GeninfoParser(geninfo_path)
        paths = parser.get_all_paths()
        
        return cls(
            exe_path=paths["exe_path"],
            project_path=paths["project_path"],
            output_path=paths["output_path"],
            nexacrolib_path=paths["nexacrolib_path"],
            generaterule_path=paths["generaterule_path"],
        )
    
    def build_command(self) -> list:
        """
        실행할 명령어 리스트 생성
        
        명령어 형식:
        nexacrodeploy.exe -P "프로젝트" -B "라이브러리" -O "출력" -GENERATERULE "규칙"
        """
        cmd = [
            self.exe_path,
            "-P", self.project_path,
            "-B", self.nexacrolib_path,
            "-O", self.output_path,
            "-GENERATERULE", self.generaterule_path
        ]
        return cmd
    
    def build_command_string(self) -> str:
        """실행할 명령어를 문자열로 반환"""
        cmd = self.build_command()
        quoted_cmd = []
        for arg in cmd:
            if " " in arg:
                quoted_cmd.append(f'"{arg}"')
            else:
                quoted_cmd.append(arg)
        return " ".join(quoted_cmd)
    
    def execute(self, dry_run: bool = False) -> int:
        """
        배포 명령 실행
        
        Args:
            dry_run: True면 명령어만 출력하고 실행하지 않음
        """
        cmd = self.build_command()
        cmd_str = self.build_command_string()
        
        print("=" * 70)
        print("Nexacro Deploy 실행")
        print("=" * 70)
        print(f"[실행 파일] {self.exe_path}")
        print(f"[프로젝트]  {self.project_path}")
        print(f"[출력 경로] {self.output_path}")
        print(f"[-B]        {self.nexacrolib_path}")
        print(f"[-GENERATERULE] {self.generaterule_path}")
        print(f"\n[실행 명령어]\n{cmd_str}\n")
        
        if dry_run:
            print("[Dry Run] 실제 실행하지 않고 명령어만 출력합니다.")
            return 0
        
        # 실행 파일 존재 확인
        if not Path(self.exe_path).exists():
            print(f"[오류] 실행 파일을 찾을 수 없습니다: {self.exe_path}")
            return 1
        
        # 프로젝트 파일 존재 확인
        if not Path(self.project_path).exists():
            print(f"[오류] 프로젝트 파일을 찾을 수 없습니다: {self.project_path}")
            return 1
        
        # 출력 디렉토리 생성
        output_dir = Path(self.output_path)
        output_dir.mkdir(parents=True, exist_ok=True)
        
        try:
            print("[실행 중...]")
            
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                encoding="utf-8",
                errors="replace"
            )
            
            if result.stdout:
                print("\n[표준 출력]")
                print(result.stdout)
            
            if result.stderr:
                print("\n[표준 오류]")
                print(result.stderr)
            
            if result.returncode == 0:
                print("\n[성공] 배포가 완료되었습니다.")
            else:
                print(f"\n[실패] 반환 코드: {result.returncode}")
            
            return result.returncode
            
        except FileNotFoundError:
            print(f"[오류] 실행 파일을 찾을 수 없습니다: {self.exe_path}")
            return 1
        except Exception as e:
            print(f"[오류] 실행 중 예외 발생: {e}")
            return 1


# ============================================================================
# 메인 함수
# ============================================================================

def print_usage():
    """사용법 출력"""
    print("사용법:")
    print("  python main.py                     # geninfo 자동 파싱하여 실행")
    print("  python main.py --dry-run           # 명령어만 출력 (실행 안함)")
    print("  python main.py <설정파일.json>     # JSON 설정 방식")
    print("")
    print("예제:")
    print("  python main.py")
    print("  python main.py --dry-run")
    print("  python main.py nexacroDeploy.json")


def get_base_dir() -> Path:
    """
    실행 중인 스크립트 또는 EXE의 실제 위치(기준 디렉토리)를 반환합니다.
    PyInstaller의 onefile 모드(Temp 폴더) 문제를 방지합니다.
    """
    if getattr(sys, 'frozen', False):
        # EXE 실행 시 (sys.executable의 부모 폴더)
        return Path(sys.executable).resolve().parent
    else:
        # 스크립트 실행 시 (현재 파일의 부모 폴더)
        return Path(__file__).resolve().parent


def find_geninfo_path() -> str:
    """기본 geninfo 파일 경로 찾기"""
    # 실제 실행 파일 위치 기준으로 geninfo 파일 찾기
    base_dir = get_base_dir()
    geninfo_path = base_dir / DEFAULT_GENINFO_PATH
    
    if geninfo_path.exists():
        return str(geninfo_path.resolve())
    
    raise FileNotFoundError(
        f"geninfo 파일을 찾을 수 없습니다.\n"
        f"기준 디렉토리: {base_dir}\n"
        f"예상 경로: {geninfo_path}"
    )


def main():
    """
    메인 진입점
    
    사용법:
        python main.py                  # geninfo 자동 파싱
        python main.py --dry-run        # 명령어만 출력
        python main.py <설정파일.json>     # JSON 설정 방식
    """
    dry_run = False
    config_file = None
    
    # 인자 파싱
    args = sys.argv[1:]
    
    for arg in args:
        if arg in ["-h", "--help", "/?"]:
            print_usage()
            sys.exit(0)
        elif arg == "--dry-run":
            dry_run = True
        elif arg.lower().endswith(".json"):
            config_file = arg
    
    try:
        base_dir = get_base_dir()
        
        if config_file:
            # JSON 설정 방식
            print(f"[모드] JSON 설정 파일 사용")
            
            # 상대 경로면 기준 디렉토리 기준으로 결합
            config_path = Path(config_file)
            if not config_path.is_absolute():
                config_path = base_dir / config_path
                
            config = DeployConfig(str(config_path))
            
            if not config.validate():
                sys.exit(1)
            
            deploy = NexacroDeploy.from_config(config)
        else:
            # geninfo 자동 파싱 방식
            print("[모드] geninfo 자동 파싱")
            geninfo_path = find_geninfo_path()
            print(f"[geninfo] {geninfo_path}")
            
            deploy = NexacroDeploy.from_geninfo(geninfo_path)
        
        return_code = deploy.execute(dry_run=dry_run)
        sys.exit(return_code)
        
    except FileNotFoundError as e:
        print(f"[오류] {e}")
        sys.exit(1)
    except ValueError as e:
        print(f"[오류] {e}")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"[오류] JSON 파싱 오류: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"[오류] 예상치 못한 오류: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
