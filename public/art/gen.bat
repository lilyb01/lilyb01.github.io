@echo off


for %%f in (..\..\static\art\2024\hzrb\*.*) do (
    echo --- >> %%~nf.md
    echo layout: post >> %%~nf.md
    echo title: "%%~nxf" >> %%~nf.md
    echo author: "lily b." >> %%~nf.md
    echo date: 2024-01-01 12:05:39 -0500 >> %%~nf.md
    echo tags: fanart >> %%~nf.md
    echo params:  >> %%~nf.md
    echo     image: /art/2024/hzrb/%%~nxf >> %%~nf.md
    echo     alt: "empty" >> %%~nf.md
    echo --- >> %%~nf.md
    echo ^[!^[^<^{^{%% param "alt" %%^}^}^>^]^(^<^{^{%% param "image" %%^}^}^>^)^]^(^<{{%% param "image" %%}}^>^) >> %%~nf.md
)