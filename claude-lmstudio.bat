@echo off
rem Ustawienia - LM Studio (Windows)
set ANTHROPIC_BASE_URL=http://192.168.50.127:1234
set ANTHROPIC_API_KEY=dummy
set ANTHROPIC_MODEL=local-model

rem Uruchomienie Claude
cmd /c "set ANTHROPIC_BASE_URL=http://192.168.50.127:1234 && set ANTHROPIC_API_KEY=dummy && set ANTHROPIC_MODEL=local-model && claude %*"