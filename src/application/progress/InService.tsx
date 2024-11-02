import React from "react";
import Schedule from "../../entities/Schedule";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  differenceInDays,
  differenceInHours,
  differenceInMilliseconds,
} from "date-fns";
import {
  BigText,
  Horizontal,
  HorizontalCenter,
  HorizontalSpace,
  PrimaryText,
  Space,
  TitleText,
} from "../../components/palette";
import styled from "styled-components";
import AnimatedNumber from "react-animated-numbers";
import FadeIn from "react-fade-in";
import { useInView } from "react-intersection-observer";

type Props = {
  firstSchedule: Schedule;
  lastSchedule: Schedule;
};

export default function InService({ firstSchedule, lastSchedule }: Props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const daysLeft = differenceInDays(lastSchedule.date, new Date());
  const hoursLeft = differenceInHours(lastSchedule.date, new Date()) % 24;
  const daysPast = differenceInDays(new Date(), firstSchedule.date);
  const millisPast = differenceInMilliseconds(new Date(), firstSchedule.date);
  const millisTotal = differenceInMilliseconds(
    lastSchedule.date,
    firstSchedule.date
  );

  const percentage = (100 * Math.max(millisPast, 0)) / millisTotal;
  const percentageRounded =
    Math.round((percentage + Number.EPSILON) * 100) / 100;

  return (
    <Wrapper ref={ref} onClick={() => alert(`${daysPast}일 지났어요!`)}>
      <HorizontalCenter style={{ marginBottom: 21 }}>
        <TitleText>{lastSchedule.name}까지</TitleText>
        <FadeIn visible={inView}>
          <Horizontal style={{ alignItems: "baseline" }}>
            <Horizontal style={{ alignItems: "center" }}>
              <AnimatedNumber
                animateToNumber={daysLeft}
                fontStyle={{ color: "#234", fontSize: 64, fontWeight: "bold" }}
              />
              <BigText>일</BigText>
            </Horizontal>
            <HorizontalSpace />
            <Horizontal style={{ alignItems: "baseline" }}>
              <AnimatedNumber
                animateToNumber={hoursLeft}
                fontStyle={{ color: "#234", fontSize: 18, fontWeight: "bold" }}
              />
              <TitleText>시간</TitleText>
            </Horizontal>
          </Horizontal>
        </FadeIn>

        <FadeIn visible={inView} delay={200}>
          <Horizontal style={{ marginTop: 24 }}>
            <TitleText style={{ marginRight: 6 }}>복무율 </TitleText>
            <AnimatedNumber
              animateToNumber={percentageRounded}
              fontStyle={{
                color: "#234",
                fontSize: 18,
                fontWeight: "bold",
              }}
            />
            <TitleText>%</TitleText>
          </Horizontal>
        </FadeIn>
      </HorizontalCenter>

      <ProgressBar animated max={millisTotal} now={millisPast}></ProgressBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 36px;
  margin-bottom: 42px;
`;
