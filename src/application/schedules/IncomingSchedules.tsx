import React, { useCallback, useEffect, useState } from "react";
import Schedule from "../../entities/Schedule";
import ScheduleItem from "./ScheduleItem";
import styled from "styled-components";
import { HorizontalCenter, TitleText } from "../../components/palette";
import FadeIn from "react-fade-in";
import { useInView } from "react-intersection-observer";
import Checkbox from "../../components/Checkbox";

export default function IncomingSchedules() {
  const [pastSchedules, setPastSchedules] = useState<Schedule[]>([]);
  const [incomingSchedules, setIncomingSchedules] = useState<Schedule[]>([]);
  const [showPastSchedules, setShowPastSchedules] = useState<boolean>(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fetch = useCallback(async () => {
    setPastSchedules(await Schedule.getPast());
    setIncomingSchedules(await Schedule.getIncoming());
  }, []);

  useEffect(() => {
    fetch().then();
  }, []);

  return (
    <Wrapper ref={ref}>
      <HorizontalCenter>
        <TitleText>남은 일정</TitleText>
        <Checkbox
          text={"지난 일정도 보기"}
          onChange={(e) => setShowPastSchedules(e.target.checked)}
        />
      </HorizontalCenter>
      {showPastSchedules && (
        <FadeIn visible={inView} delay={0}>
          {pastSchedules.map((s) => (
            <ScheduleItem key={s.name} schedule={s} />
          ))}
        </FadeIn>
      )}
      <FadeIn visible={inView} delay={200}>
        {incomingSchedules.map((s) => (
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
