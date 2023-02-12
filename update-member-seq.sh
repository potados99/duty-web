#!/bin/bash

# 이름과 생년월일로 인편 작성에 필요한 memberSeq을 가져와서
# duty.potados.com에 표시되는 링크에 반영하는 스크립트입니다.

NAME='송병준'
BIRTH='19990211'
FILE='src/application/stories/HelpThisPoorGuy.tsx'

# 스크립트 경로에서 실행되어야 함!
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cd "$SCRIPT_DIR"

git pull

if grep -Fq 'REPLACEME' $FILE
then
    # 파일에 replaceme가 있음!
    # 찾아와야 함!
    echo 가즈아ㅏㅏ!
else
    # 파일에 replaceme가 없음!
    # 끝내면 됨!
    echo 이미 찾아와서 할 일이 없어용 안뇽~~
    exit 0
fi

# 페-치!
memberSeq=$(curl "http://airforce.mil.kr:8081/user/emailPicViewSameMembers.action?siteId=last2&searchName=$NAME&searchBirth=$BIRTH" -L -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36' | grep "선택하기" | sed -e 's/.*[^0-9]\([0-9]\+\)[^0-9]*$/\1/')

# 못 찾으면 기본값!
replacement="${memberSeq:-REPLACEME}"

# 보고!
curl -X POST -d "$replacement" https://collect.potados.com?channel=duty

if [ "$replacement" = 'REPLACEME' ]
then
    echo 아직 바꿀게 없어요ㅠ 못 구해옴..
    exit 0
else
    echo 새 memberSeq은 "$replacement" 입니당!
fi

# 인-플레이스 교체!
sed -i "s/REPLACEME/$replacement/" $FILE

# 커밋푸시!
git add $FILE
git commit -m "chore: memberSeq은 이제 $replacement"
git push
