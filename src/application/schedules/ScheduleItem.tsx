import React from "react";
import Schedule from "../../entities/Schedule";
import styled from "styled-components";
import { Horizontal, PrimaryText } from "../../components/palette";
import {format, isSameDay} from "date-fns";
import {differenceInDays, differenceInHours} from "date-fns";

type Props = {
  schedule: Schedule;
};

export default function ScheduleItem({ schedule }: Props) {
  const daysLeft = differenceInDays(schedule.date, new Date());
  const hoursLeft = differenceInHours(schedule.date, new Date());
  const isToday = isSameDay(schedule.date, new Date());

  return (
    <Wrapper>
      <Horizontal>
        <PrimaryText style={{ marginRight: 6 }}>{schedule.emoji}</PrimaryText>
        <PrimaryText>
            {daysLeft > 0 && (<><b>"{schedule.name}"</b>까지 {daysLeft}일</>)}
            {daysLeft === 0 && hoursLeft > 0 && (<><b>"{schedule.name}"</b>까지 {hoursLeft}시간</>)}
            {isToday && (<><b>"{schedule.name}"</b> 당일!</>)}
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

  margin-top: 24px;
  margin-bottom: 24px;
`;
