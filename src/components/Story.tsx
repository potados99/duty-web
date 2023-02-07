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
      <PrimaryTextInverse style={{ marginTop: 4 }}>{body}</PrimaryTextInverse>

      <LinkedButton href={actionHref} style={{ marginTop: 12 }}>
        {actionLabel} {">"}
      </LinkedButton>

      <img src={image} width="100%" />
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
