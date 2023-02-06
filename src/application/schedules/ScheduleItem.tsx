import React from "react";
import Schedule from "../../entities/Schedule";
import { differenceInDays } from "date-fns";

type Props = {
  schedule: Schedule;
};

export default function ScheduleItem({ schedule }: Props) {
  const daysLeft = differenceInDays(schedule.date, new Date());

  return (
    <div>
      "{schedule.name}"까지 {daysLeft}일
    </div>
  );
}
