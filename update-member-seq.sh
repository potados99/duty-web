#!/bin/bash

memberSeq=$(curl 'http://airforce.mil.kr:8081/user/emailPicViewSameMembers.action?siteId=last2&searchName=송병준&searchBirth=19990211' -L -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36' | grep "선택하기" | sed -e 's/.*[^0-9]\([0-9]\+\)[^0-9]*$/\1/')

replacement="${memberSeq:-REPLACEME}"

echo $replacement

sed -i "s/REPLACEME/$replacement/" src/application/stories/HelpThisPoorGuy.tsx
