import React from "react";
import Section from "../components/Section";
import TotalProgress from "./progress/TotalProgress";
import { Space } from "../components/palette";
import IncomingSchedules from "./schedules/IncomingSchedules";
import HelpThisPoorGuy from "./stories/HelpThisPoorGuy";
import HowIsHeGoing from "./stories/HowIsHeGoing";
import Footer from "./footer/Footer";
import styled from "styled-components";
import Comments from "./comments/Comments";

export default function Contents() {
  return (
    <Container>
      <Main>
        <Section backgroundColor="#fff">
          <TotalProgress />
        </Section>

        <Space />

        <Section backgroundColor="#fff">
          <IncomingSchedules />
        </Section>

        <Space />

        <Section backgroundColor="#222">
          <HelpThisPoorGuy />
        </Section>

        <Space />

        <Section backgroundColor="#222">
          <HowIsHeGoing />
        </Section>

        <Additional>
          <Comments />
        </Additional>

        <Space />

        <Section backgroundColor="#f9f9f9">
          <Footer />
        </Section>
      </Main>
      <Side>
        <Comments />
      </Side>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f9f9f9;
`;

const Main = styled.div`
  flex: 1;
  max-width: 800px;

  border: none;
  @media (min-width: 800px) {
    border: 2px solid #efefef;
    border-top: none;
    border-bottom: none;
  }
`;

const Side = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: unset;
    width: 400px;
    height: 1px; // if full height it will not float.
    position: sticky;
    position: -webkit-sticky;
    top: 0;
  }
`;

const Additional = styled.div`
  display: none;
  @media (max-width: 1023px) {
    display: unset;
  }
`;
