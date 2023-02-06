import React from "react";
import { LinkedButton, PrimaryTextInverse, TitleTextInverse } from "./palette";
import styled from "styled-components";

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
  return (
    <Wrapper>
      <TitleTextInverse>{title}</TitleTextInverse>
      <PrimaryTextInverse>{body}</PrimaryTextInverse>

      <LinkedButton href={actionHref}>
        {actionLabel} {">"}
      </LinkedButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 24px;
  margin-bottom: 24px;
`;
