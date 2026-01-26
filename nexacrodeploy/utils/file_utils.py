#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
파일 관련 유틸리티 함수
"""

import os
import shutil
from pathlib import Path


def copy_files(src_dir: str, dest_dir: str, pattern: str = "*"):
    """
    파일 복사
    
    Args:
        src_dir: 소스 디렉토리
        dest_dir: 대상 디렉토리
        pattern: 파일 패턴 (기본값: *)
    """
    src_path = Path(src_dir)
    dest_path = Path(dest_dir)
    
    # 대상 디렉토리 생성
    dest_path.mkdir(parents=True, exist_ok=True)
    
    # 파일 복사
    for file in src_path.glob(pattern):
        if file.is_file():
            shutil.copy2(file, dest_path / file.name)
            print(f"복사: {file.name}")


def create_backup(target_dir: str, backup_dir: str = None):
    """
    백업 생성
    
    Args:
        target_dir: 백업할 디렉토리
        backup_dir: 백업 저장 위치 (기본값: target_dir_backup)
    """
    target_path = Path(target_dir)
    
    if not target_path.exists():
        print(f"백업할 디렉토리가 없습니다: {target_dir}")
        return None
    
    if backup_dir is None:
        backup_dir = f"{target_dir}_backup"
    
    backup_path = Path(backup_dir)
    
    if backup_path.exists():
        shutil.rmtree(backup_path)
    
    shutil.copytree(target_path, backup_path)
    print(f"백업 완료: {backup_path}")
    
    return str(backup_path)


def clean_directory(target_dir: str):
    """
    디렉토리 정리 (내용물 삭제)
    
    Args:
        target_dir: 정리할 디렉토리
    """
    target_path = Path(target_dir)
    
    if target_path.exists():
        for item in target_path.iterdir():
            if item.is_file():
                item.unlink()
            elif item.is_dir():
                shutil.rmtree(item)
        print(f"정리 완료: {target_dir}")
