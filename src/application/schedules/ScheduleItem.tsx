import React from "react";
import Schedule from "../../entities/Schedule";
import { differenceInDays } from "date-fns";
import styled from "styled-components";

type Props = {
  schedule: Schedule;
};

export default function ScheduleItem({ schedule }: Props) {
  const daysLeft = differenceInDays(schedule.date, new Date());

  return (
    <Wrapper>
      <HorizontalWrapper>
        <div>{schedule.emoji}</div>
        <div>
          <b>"{schedule.name}"</b>까지 {daysLeft}일
        </div>
      </HorizontalWrapper>
      <div>{schedule.date.toLocaleDateString()}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
