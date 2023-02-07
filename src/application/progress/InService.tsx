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
  const daysLeft = differenceInDays(lastSchedule.date, new Date());
  const millisPast = differenceInMilliseconds(new Date(), firstSchedule.date);
  const millisTotal = differenceInMilliseconds(
    lastSchedule.date,
    firstSchedule.date
  );

  const percentage = (100 * Math.max(millisPast, 0)) / millisTotal;
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
        <Horizontal style={{ marginTop: 24 }}>
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

      <ProgressBar animated max={millisTotal} now={millisPast}></ProgressBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 36px;
  margin-bottom: 42px;
`;
