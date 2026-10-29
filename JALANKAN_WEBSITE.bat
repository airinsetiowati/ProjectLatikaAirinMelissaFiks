@echo off
title EarthFera 3D
echo ===================================================
echo             EarthFera - Beyond What We See
echo ===================================================
echo Membuka website di browser...
echo.

start "" "%~dp0index.html"

where node >nul 2>nul
if %errorlevel% equ 0 (
    start http://localhost:8080
    node "%~dp0server.js"
)
