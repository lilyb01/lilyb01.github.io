#!/bin/bash

echo -e "<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">" >> index.html
echo -e "<HTML>" >> index.html
echo -e "  <HEAD>" >> index.html
echo -e "    <TITLE>Index of /${PWD##*/}/</TITLE>" >> index.html
echo -e "    <style type="text/css">" >> index.html
echo -e "    <!--" >> index.html
echo -e "    .name, .mtime { text-align: left; }" >> index.html
echo -e "    .size { text-align: right; }" >> index.html
echo -e "    td { text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }" >> index.html
echo -e "    table { border-collapse: collapse; }" >> index.html
echo -e "    tr th { border-bottom: 2px groove; }" >> index.html
echo -e "    -->" >> index.html
echo -e "    </style>" >> index.html
echo -e "  </HEAD>" >> index.html
echo -e "  <BODY>" >> index.html
echo -e "    <H1>Index of /${PWD##*/}/</H1>" >> index.html
echo -e "<TABLE width="100%"><THEAD><TR>" >> index.html
echo -e "<TH class="name"><A HREF="?N=D">Name</A></TH><TH class="mtime"><A HREF="?M=D">Last modified</A></TH><TH class="size"><A HREF="?S=D">Size</A></TH>" >> index.html
echo -e "</TR></THEAD>" >> index.html
echo -e "<TBODY>" >> index.html

mtime=`date -r ..`
size=`stat -c %s "$file"`
echo -e "<TR><TD class=\"name\"><A HREF=\"..\">Parent directory</A></TD><TD class=\"mtime\">$mtime</TD><TD class=\"size\">$size</TD></TR>" >> index.html

for file in *
do
    if [ -d "$file" ]; then
        echo "adding $file"
        mtime=`date -r "$file"`
        size=`stat -c %s "$file"`
        echo -e "<TR><TD class=\"name\"><A HREF=\"$file\">$file</A></TD><TD class=\"mtime\">$mtime</TD><TD class=\"size\">$size</TD></TR>" >> index.html
    fi
done

for file in *
do
    if [[ ! -d "$file" && ! $file = "index.html" ]]; then
        echo "adding $file"
        mtime=`date -r "$file"`
        size=`stat -c %s "$file"`
        echo -e "<TR><TD class=\"name\"><A HREF=\"$file\">$file</A></TD><TD class=\"mtime\">$mtime</TD><TD class=\"size\">$size</TD></TR>" >> index.html
    fi
done

echo -e "</TBODY></TABLE><HR>    <ADDRESS>" >> index.html
echo -e "     generatehtml.sh by lilyb01<BR>" >> index.html
echo -e "     i stole the styling from WEBrick/1.6.0 (Ruby/2.7.2/2020-10-01)<BR>" >> index.html
echo -e "     at heypumpk.in" >> index.html
echo -e "    </ADDRESS>" >> index.html
echo -e "  </BODY>" >> index.html
echo -e "</HTML>" >> index.html
