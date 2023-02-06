import React from "react";
import Schedule from "../../entities/Schedule";
import { differenceInDays } from "date-fns";
import styled from "styled-components";
import { Horizontal, PrimaryText } from "../../components/palette";
import { format } from "date-fns";

type Props = {
  schedule: Schedule;
};

export default function ScheduleItem({ schedule }: Props) {
  const daysLeft = differenceInDays(schedule.date, new Date());

  return (
    <Wrapper>
      <Horizontal>
        <PrimaryText style={{ marginRight: 6 }}>{schedule.emoji}</PrimaryText>
        <PrimaryText>
          <b>"{schedule.name}"</b>까지 {daysLeft}일
        </PrimaryText>
      </Horizontal>
      <PrimaryText>{format(schedule.date, "yyyy년 MM월 dd일")}</PrimaryText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 16px;
  margin-bottom: 16px;
`;
