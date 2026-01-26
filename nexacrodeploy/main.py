#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Nexacro Deploy - 자동 배포 스크립트

이 스크립트는 nexacroDeploy.json 설정 파일을 읽어
nexacrodeploy.exe를 실행하여 Nexacro 프로젝트를 배포합니다.

사용법:
    python main.py                          # 기본 설정으로 실행
    python main.py --project "경로"         # 프로젝트 경로 지정
    python main.py --output "경로"          # 출력 경로 지정
    python main.py --dry-run                # 실제 실행 없이 명령어 확인
"""

import os
import sys
import json
import subprocess
import argparse
from pathlib import Path
from typing import Dict, Optional


# ============================================================================
# 상수 정의
# ============================================================================

# 설정 파일명
CONFIG_FILENAME = "nexacroDeploy.json"

# 기본 프로젝트 경로 (상대 경로)
DEFAULT_PROJECT_PATH = "../NexaroDesktopDMI/NexaroDesktopDMI.xprj"

# 기본 출력 경로 (상대 경로)
DEFAULT_OUTPUT_PATH = "../NexaroDesktopDMI_output"


# ============================================================================
# 설정 관리 클래스
# ============================================================================

class DeployConfig:
    """
    배포 설정을 관리하는 클래스
    
    nexacroDeploy.json 파일을 읽어서 설정값을 제공합니다.
    
    Attributes:
        config_path (Path): 설정 파일 경로
        config (dict): 설정 데이터
    """
    
    def __init__(self, config_path: Optional[str] = None):
        """
        DeployConfig 초기화
        
        Args:
            config_path: 설정 파일 경로 (기본값: 스크립트와 같은 폴더의 nexacroDeploy.json)
        """
        if config_path is None:
            # 스크립트가 있는 폴더에서 설정 파일 찾기
            self.config_path = Path(__file__).parent / CONFIG_FILENAME
        else:
            self.config_path = Path(config_path)
        
        self.config = self._load_config()
    
    def _load_config(self) -> Dict:
        """
        설정 파일 로드
        
        Returns:
            dict: 설정 데이터
            
        Raises:
            FileNotFoundError: 설정 파일이 없을 경우
            json.JSONDecodeError: JSON 파싱 오류
        """
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
    
    def validate(self) -> bool:
        """
        설정 유효성 검사
        
        Returns:
            bool: 모든 필수 설정이 존재하면 True
        """
        required_keys = ["nexacroDeployExecute", "-B", "-GENERATERULE"]
        missing_keys = [key for key in required_keys if not self.config.get(key)]
        
        if missing_keys:
            print(f"[오류] 필수 설정이 누락되었습니다: {missing_keys}")
            return False
        
        # 실행 파일 존재 확인
        if not Path(self.exe_path).exists():
            print(f"[경고] 실행 파일을 찾을 수 없습니다: {self.exe_path}")
            # 경고만 출력하고 계속 진행 (테스트 환경에서는 없을 수 있음)
        
        return True


# ============================================================================
# 배포 실행 클래스
# ============================================================================

class NexacroDeploy:
    """
    Nexacro 배포를 실행하는 클래스
    
    nexacrodeploy.exe를 호출하여 프로젝트를 빌드/배포합니다.
    
    Attributes:
        config (DeployConfig): 배포 설정
        project_path (str): 프로젝트 파일 경로 (.xprj)
        output_path (str): 출력 경로
    """
    
    def __init__(self, config: DeployConfig, project_path: str, output_path: str):
        """
        NexacroDeploy 초기화
        
        Args:
            config: 배포 설정 객체
            project_path: 프로젝트 파일 경로 (.xprj)
            output_path: 출력 경로
        """
        self.config = config
        self.project_path = self._resolve_path(project_path)
        self.output_path = self._resolve_path(output_path)
    
    def _resolve_path(self, path: str) -> str:
        """
        상대 경로를 절대 경로로 변환
        
        Args:
            path: 변환할 경로
            
        Returns:
            str: 절대 경로
        """
        path_obj = Path(path)
        
        # 상대 경로인 경우, 설정 파일 기준으로 해석
        if not path_obj.is_absolute():
            base_dir = self.config.config_path.parent
            path_obj = base_dir / path_obj
        
        return str(path_obj.resolve())
    
    def build_command(self) -> list:
        """
        실행할 명령어 리스트 생성
        
        명령어 형식:
        nexacrodeploy.exe -P "프로젝트경로" -B "라이브러리경로" -O "출력경로" -GENERATERULE "규칙경로"
        
        Returns:
            list: 명령어 인자 리스트
        """
        cmd = [
            self.config.exe_path,           # 실행 파일
            "-P", self.project_path,        # 프로젝트 경로
            "-B", self.config.nexacrolib_path,  # nexacrolib 경로
            "-O", self.output_path,         # 출력 경로
            "-GENERATERULE", self.config.generaterule_path  # generate 규칙
        ]
        return cmd
    
    def build_command_string(self) -> str:
        """
        실행할 명령어를 문자열로 반환 (디버깅/로깅용)
        
        Returns:
            str: 명령어 문자열
        """
        cmd = self.build_command()
        # 공백이 포함된 경로는 따옴표로 감싸기
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
            dry_run: True이면 실제 실행 없이 명령어만 출력
            
        Returns:
            int: 프로세스 반환 코드 (0: 성공, 그 외: 실패)
        """
        cmd = self.build_command()
        cmd_str = self.build_command_string()
        
        print("=" * 70)
        print("Nexacro Deploy 실행")
        print("=" * 70)
        print(f"\n[설정 파일] {self.config.config_path}")
        print(f"[프로젝트]   {self.project_path}")
        print(f"[출력 경로] {self.output_path}")
        print(f"\n[실행 명령어]\n{cmd_str}\n")
        
        if dry_run:
            print("[DRY-RUN 모드] 실제 실행하지 않습니다.")
            return 0
        
        # 프로젝트 파일 존재 확인
        if not Path(self.project_path).exists():
            print(f"[오류] 프로젝트 파일을 찾을 수 없습니다: {self.project_path}")
            return 1
        
        # 출력 디렉토리 생성
        output_dir = Path(self.output_path)
        output_dir.mkdir(parents=True, exist_ok=True)
        
        try:
            print("[실행 중...]")
            
            # 프로세스 실행
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                encoding="utf-8",
                errors="replace"
            )
            
            # 결과 출력
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
            print(f"[오류] 실행 파일을 찾을 수 없습니다: {self.config.exe_path}")
            return 1
        except Exception as e:
            print(f"[오류] 실행 중 예외 발생: {e}")
            return 1


# ============================================================================
# 메인 함수
# ============================================================================

def parse_arguments():
    """
    명령줄 인자 파싱
    
    Returns:
        argparse.Namespace: 파싱된 인자
    """
    parser = argparse.ArgumentParser(
        description="Nexacro 프로젝트 배포 자동화 스크립트",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
예제:
  python main.py                              # 기본 설정으로 실행
  python main.py --project "../MyProject/MyProject.xprj"
  python main.py --output "../output"
  python main.py --dry-run                    # 명령어만 확인
        """
    )
    
    parser.add_argument(
        "--config", "-c",
        default=None,
        help="설정 파일 경로 (기본값: nexacroDeploy.json)"
    )
    
    parser.add_argument(
        "--project", "-p",
        default=DEFAULT_PROJECT_PATH,
        help=f"프로젝트 파일 경로 (.xprj) (기본값: {DEFAULT_PROJECT_PATH})"
    )
    
    parser.add_argument(
        "--output", "-o",
        default=DEFAULT_OUTPUT_PATH,
        help=f"출력 경로 (기본값: {DEFAULT_OUTPUT_PATH})"
    )
    
    parser.add_argument(
        "--dry-run", "-n",
        action="store_true",
        help="실제 실행 없이 명령어만 출력"
    )
    
    return parser.parse_args()


def main():
    """
    메인 진입점
    
    1. 명령줄 인자 파싱
    2. 설정 파일 로드
    3. 배포 실행
    """
    # 1. 명령줄 인자 파싱
    args = parse_arguments()
    
    try:
        # 2. 설정 로드
        config = DeployConfig(args.config)
        
        # 3. 설정 유효성 검사
        if not config.validate():
            sys.exit(1)
        
        # 4. 배포 객체 생성
        deploy = NexacroDeploy(
            config=config,
            project_path=args.project,
            output_path=args.output
        )
        
        # 5. 실행
        return_code = deploy.execute(dry_run=args.dry_run)
        
        sys.exit(return_code)
        
    except FileNotFoundError as e:
        print(f"[오류] {e}")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"[오류] 설정 파일 JSON 파싱 오류: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"[오류] 예상치 못한 오류: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
