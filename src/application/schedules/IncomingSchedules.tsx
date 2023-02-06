import React, { useCallback, useEffect, useState } from "react";
import Section from "../../components/Section";
import Schedule from "../../entities/Schedule";
import ScheduleItem from "./ScheduleItem";
import styled from "styled-components";
import { HorizontalCenter, TitleText } from "../../components/palette";

export default function IncomingSchedules() {
  const [schedules, setSchedules] = useState<Schedule[]>();

  const fetch = useCallback(async () => {
    setSchedules(await Schedule.getIncoming());
  }, []);

  useEffect(() => {
    fetch().then();
  }, []);

  return (
    <Wrapper>
      <HorizontalCenter>
        <TitleText>남은 일정</TitleText>
      </HorizontalCenter>
      {schedules?.map((s) => (
        <ScheduleItem schedule={s} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 28px;
  margin-bottom: 36px;
`;
