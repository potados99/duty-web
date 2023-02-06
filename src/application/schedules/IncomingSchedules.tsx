import React, { useCallback, useEffect, useState } from "react";
import Section from "../../components/Section";
import Schedule from "../../entities/Schedule";
import ScheduleItem from "./ScheduleItem";

export default function IncomingSchedules() {
  const [schedules, setSchedules] = useState<Schedule[]>();

  const fetch = useCallback(async () => {
    setSchedules(await Schedule.getIncoming());
  }, []);

  useEffect(() => {
    fetch().then();
  }, []);

  return (
    <>
      {schedules?.map((s) => (
        <ScheduleItem schedule={s} />
      ))}
    </>
  );
}
