import React from "react";
import Story from "../../components/Story";

export default function HelpThisPoorGuy() {
  return (
    <Story
      title="도와주세요"
      body="가엾은 병준이를 위해 편지 한 장을 기부해주세요. 2월 27일 낮 9시부터 보낼 수 있어요."
      image="/images/light.png"
      actionLabel="편지 쓰러 가기"
      actionHref="https://www.airforce.mil.kr/user/indexSub.action?codyMenuSeq=156893223&siteId=last2&menuUIType=sub&dum=dum&command2=getEmailList&searchName=송병준&searchBirth=19990211&memberSeq=REPLACEME"
    />
  );
}
