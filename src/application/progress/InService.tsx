import React, { useCallback, useEffect, useState } from "react";
import Schedule from "../../entities/Schedule";
import ProgressBar from "react-bootstrap/ProgressBar";
import { differenceInDays, differenceInMilliseconds } from "date-fns";
import { BigText, TitleText } from "../../components/palette";
import styled from "styled-components";

type Props = {
  firstSchedule: Schedule;
  lastSchedule: Schedule;
};

export default function InService({ firstSchedule, lastSchedule }: Props) {
  const [percentage, setPercentage] = useState<number>();

  const calculate = useCallback(() => {
    setPercentage(
      (100 * differenceInMilliseconds(new Date(), firstSchedule.date)) /
        differenceInMilliseconds(lastSchedule.date, firstSchedule.date)
    );
  }, []);

  // 최초 1회
  useEffect(calculate, []);

  // 이후 계속
  useEffect(() => {
    setTimeout(() => {
      calculate();
    }, 500);
  });

  const total = differenceInDays(lastSchedule.date, firstSchedule.date);
  const progress = differenceInDays(new Date(), firstSchedule.date);
  const daysLeft = differenceInDays(lastSchedule.date, new Date());

  return (
    <Wrapper>
      <BigText>
        {lastSchedule.name}까지 {daysLeft}일
      </BigText>
      <TitleText>복무율 {percentage}%</TitleText>
      <ProgressBar animated max={total} now={progress}></ProgressBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
`;
