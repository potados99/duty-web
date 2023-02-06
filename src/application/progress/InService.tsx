import React, { useCallback, useEffect, useState } from "react";
import Schedule from "../../entities/Schedule";
import ProgressBar from "react-bootstrap/ProgressBar";
import { differenceInDays, differenceInMilliseconds } from "date-fns";
import {
  BigText,
  Horizontal,
  HorizontalCenter,
  PrimaryText,
  TitleText,
} from "../../components/palette";
import styled from "styled-components";
import AnimatedNumber from "react-animated-numbers";

type Props = {
  firstSchedule: Schedule;
  lastSchedule: Schedule;
};

export default function InService({ firstSchedule, lastSchedule }: Props) {
  const total = differenceInDays(lastSchedule.date, firstSchedule.date);
  const progress = differenceInDays(new Date(), firstSchedule.date);
  const daysLeft = differenceInDays(lastSchedule.date, new Date());
  const percentage =
    (100 * differenceInMilliseconds(new Date(), firstSchedule.date)) /
    differenceInMilliseconds(lastSchedule.date, firstSchedule.date);
  const percentageRounded =
    Math.round((percentage + Number.EPSILON) * 100) / 100;

  return (
    <Wrapper>
      <HorizontalCenter style={{ marginBottom: 21 }}>
        <TitleText>{lastSchedule.name}까지</TitleText>
        <Horizontal style={{ alignItems: "center" }}>
          <AnimatedNumber
            animateToNumber={daysLeft}
            fontStyle={{ color: "#222", fontSize: 64, fontWeight: "bold" }}
          />
          <BigText>일</BigText>
        </Horizontal>
        <Horizontal>
          <TitleText style={{ marginRight: 6 }}>복무율 </TitleText>
          <AnimatedNumber
            animateToNumber={percentageRounded}
            fontStyle={{
              color: "#222",
              fontSize: 18,
              fontWeight: "bold",
            }}
          />
          <TitleText>%</TitleText>
        </Horizontal>
      </HorizontalCenter>

      <ProgressBar animated max={total} now={progress}></ProgressBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 36px;
`;
