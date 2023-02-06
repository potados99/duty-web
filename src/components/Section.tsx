import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type Props = PropsWithChildren & {
  backgroundColor: string;
};

export default function Section(props: Props) {
  return (
    <>
      <Container {...props}>
        <Content>{props.children}</Content>
      </Container>
      <Space />
    </>
  );
}

const Container = styled.div<Props>`
  display: flex;
  flex-direction: column; // top-down
  align-items: center;
  justify-content: center;

  padding-left: 18px;
  padding-right: 18px;

  background-color: ${(props) => props.backgroundColor};
`;

const Content = styled.div`
  width: 100%;
  max-width: 600px;
`;

const Space = styled.div`
  height: 12px;
  background-color: #fff;
`;
