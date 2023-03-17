import React from "react";
import Story from "../../components/Story";

export default function HelpThisPoorGuy() {
  return (
    <Story
      title="도와주세요"
      body="겨우 훈련단을 탈출한 병준이는 다시 특기학교로 붙잡혀 들어갔습니다. 가엾은 병준이를 위해 편지 한 장을 기부해주세요. 3월 20일 낮 10시부터 보낼 수 있어요."
      image="/images/light.png"
      actionLabel="편지 쓰러 가기"
      actionHref="https://atc.airforce.mil.kr:444/user/indexSub.action?codyMenuSeq=156894686&siteId=tong-new&menuUIType=top&dum=dum&command2=getEmailList&searchName=송병준&searchBirth=19990211&memberSeq=329123001"
      
    />
  );
}
