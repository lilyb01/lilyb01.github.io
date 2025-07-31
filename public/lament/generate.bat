@echo off

echo %1
:: just gonna steal the cygwin date.exe bc the windows tool is stinky
::D:\cygwin64\bin\date.exe +"%%Y-%%m-%%d %%T" > temp.txt
::set /p mydate=<temp.txt
::del temp.txt

for /l %%x in (36, 1, 42) dp (
    echo --- >> %%x.md
    echo layout: "flower" >> %%x.md
    echo title: "chapter two - page %%x" >> %%x.md
    echo author: "lily b" >> %%x.md
    echo date: "2021-12-28 00:00:05" >> %%x.md
    echo image: "/assets/img/flw/%%x" >> %%x.md
    echo alt: "🌼" >> %%x.md
    echo num: "%%x" >> %%x.md
    echo --- >> %%x.md
    echo. >> %%x.md
    echo <picture> >> %%x.md
    echo <source media="all and (orientation: landscape)" srcset="{{ site.baseurl }}{{ page.image }}"> >> %%x.md
    echo <img src="{{ site.baseurl }}{{ page.image }}" alt="{{ page.alt }}"> >> %%x.md
    echo </picture> >> %%x.md
)