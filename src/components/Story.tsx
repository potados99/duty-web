import React from "react";
import { LinkedButton, PrimaryTextInverse, TitleTextInverse } from "./palette";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import FadeIn from "react-fade-in";
import AsyncImage from "./AsyncImage";

type Props = {
  title: string;
  body: string;
  image: string;
  actionLabel: string;
  actionHref: string;
};

export default function Story({
  title,
  body,
  image,
  actionLabel,
  actionHref,
}: Props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Wrapper ref={ref}>
      <TitleTextInverse>{title}</TitleTextInverse>

      <FadeIn visible={inView} transitionDuration={700} delay={400}>
        <PrimaryTextInverse style={{ marginTop: 4, textAlign: "center" }}>
          {body}
        </PrimaryTextInverse>
      </FadeIn>

      <LinkedButton href={actionHref} style={{ marginTop: 12 }}>
        {actionLabel} {">"}
      </LinkedButton>

      <AsyncImage alt={body} src={image} width="100%" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 36px;
`;
