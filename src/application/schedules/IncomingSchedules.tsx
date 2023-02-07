import React, { useCallback, useEffect, useState } from "react";
import Schedule from "../../entities/Schedule";
import ScheduleItem from "./ScheduleItem";
import styled from "styled-components";
import { HorizontalCenter, TitleText } from "../../components/palette";
import FadeIn from "react-fade-in";
import { useInView } from "react-intersection-observer";

export default function IncomingSchedules() {
  const [schedules, setSchedules] = useState<Schedule[]>();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fetch = useCallback(async () => {
    setSchedules(await Schedule.getIncoming());
  }, []);

  useEffect(() => {
    fetch().then();
  }, []);

  return (
    <Wrapper ref={ref}>
      <HorizontalCenter>
        <TitleText>남은 일정</TitleText>
      </HorizontalCenter>
      <FadeIn visible={inView} delay={200}>
        {schedules?.map((s) => (
          <ScheduleItem key={s.name} schedule={s} />
        ))}
      </FadeIn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
`;
