#!/bin/bash

NEWFILE=$1

for file in `ls|sort -g -r`
do
	filename=$(basename "$file")
	extension=${filename##*.}
	filename=${filename%.*}

	if [ $filename -ge $NEWFILE ]
	then
		# mv "$file" "$(($filename +1))".$extension
		sed -i -e "s/\(flw\/\).\{2\}/\1$filename/" "$file"
		sed -i -e "s/\(num:\ \"\).\{2\}/\1$filename/" "$file"
		sed -i -e "s/\(date:\ \"\).\{19\}/\12021-12-21 00:20:32/" "$file"
	fi
done
