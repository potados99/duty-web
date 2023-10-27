import React from "react";
import Schedule from "../../entities/Schedule";
import styled from "styled-components";
import { Horizontal, PrimaryText } from "../../components/palette";
import { format, isSameDay } from "date-fns";
import { differenceInDays, differenceInHours } from "date-fns";

type Props = {
  schedule: Schedule;
};

export default function ScheduleItem({ schedule }: Props) {
  const daysLeft = differenceInDays(schedule.date, new Date());
  const hoursLeft = differenceInHours(schedule.date, new Date());
  const isToday = isSameDay(schedule.date, new Date());

  const manyDaysLeft = daysLeft > 0;
  const fewHoursLeft = daysLeft === 0 && hoursLeft > 0;
  const inTheMiddle = hoursLeft < 0 && isToday;
  const isPast = hoursLeft < 0 && !isToday;

  return (
    <Wrapper isPast={isPast}>
      <Horizontal>
        <PrimaryText style={{ marginRight: 6 }}>{schedule.emoji}</PrimaryText>
        <PrimaryText>
          {manyDaysLeft && (
            <>
              <b>"{schedule.name}"</b>까지 {daysLeft}일
            </>
          )}
          {fewHoursLeft && (
            <>
              <b>"{schedule.name}"</b>까지 {hoursLeft}시간
            </>
          )}
          {inTheMiddle && (
            <>
              <b>"{schedule.name}"</b> 당일!
            </>
          )}
          {isPast && (
            <>
              <b>"{schedule.name}"</b>
            </>
          )}
        </PrimaryText>
      </Horizontal>
      <PrimaryText>{format(schedule.date, "yyyy년 MM월 dd일")}</PrimaryText>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isPast: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 24px;
  margin-bottom: 24px;

  opacity: ${({ isPast }) => (isPast ? 0.5 : 1)};
`;
