import React, { useCallback, useEffect, useState } from "react";
import Schedule from "../../entities/Schedule";
import InService from "./InService";
import AfterDischarge from "./AfterDischarge";

export default function TotalProgress() {
  const [firstSchedule, setFirstSchedule] = useState<Schedule>();
  const [lastSchedule, setLastSchedule] = useState<Schedule>();

  const fetch = useCallback(async () => {
    setFirstSchedule(await Schedule.getFirst());
    setLastSchedule(await Schedule.getLast());
  }, []);

  useEffect(() => {
    fetch().then();
  }, []);

  const yet =
    firstSchedule != null &&
    lastSchedule != null &&
    new Date() < lastSchedule.date;

  return yet ? (
    <InService firstSchedule={firstSchedule} lastSchedule={lastSchedule} />
  ) : (
    <AfterDischarge />
  );
}
