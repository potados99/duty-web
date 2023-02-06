import React from "react";
import Section from "../../components/Section";
import Schedule from "../../entities/Schedule";
import { differenceInDays } from "date-fns";

type Props = {
  firstSchedule: Schedule;
  lastSchedule: Schedule;
};

export default function InService({ firstSchedule, lastSchedule }: Props) {
  const total = differenceInDays(lastSchedule.date, firstSchedule.date);
  const progress = differenceInDays(new Date(), firstSchedule.date);
  const daysLeft = differenceInDays(lastSchedule.date, new Date());

  return (
    <Section>
      <p>
        {lastSchedule.name}까지 {daysLeft}일
      </p>
      <progress max={total} value={progress}></progress>
    </Section>
  );
}
