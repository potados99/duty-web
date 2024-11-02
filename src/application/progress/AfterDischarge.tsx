import React from "react";
import styled from "styled-components";
import { BigText, HorizontalCenter, TitleText } from "../../components/palette";
import { useInView } from "react-intersection-observer";
import FadeIn from "react-fade-in";

export default function AfterDischarge() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Wrapper ref={ref}>
      <HorizontalCenter style={{ marginBottom: 21 }}>
        <FadeIn visible={inView}>
          <BigText>🎉전역🎉</BigText>
          <TitleText>2024년 11월 12일 전역했어요!</TitleText>
        </FadeIn>
      </HorizontalCenter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 36px;
  margin-bottom: 42px;
`;
