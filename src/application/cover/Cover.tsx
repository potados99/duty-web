import React from "react";
import styled from "styled-components";
import { BigText } from "../../components/palette";
import FadeIn from "react-fade-in";

export default function Cover() {
  return (
    <Wrapper onClick={() => window.scrollTo(0, window.innerHeight)}>
      <TitleBox>
        <FadeIn delay={300} transitionDuration={600}>
          <BigText
            style={{
              color: "#234",
              textAlign: "center",
            }}
          >
            병준이의
            <br />
            군대 여행
          </BigText>
        </FadeIn>
      </TitleBox>
      <ArrowBox>
        <FadeIn delay={1000} transitionDuration={1000}>
          <img
            src="/arrow.svg"
            width="50"
            style={{ marginBottom: 48 }}
            alt="arrow"
          />
        </FadeIn>
      </ArrowBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100vh;

  background: linear-gradient(white, #f9f2ff, #ecdafa);
  word-break: keep-all;
`;

const TitleBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ArrowBox = styled.div``;
