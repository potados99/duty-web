import React from "react";
import Footer from "./footer/Footer";
import styled from "styled-components";
import Section from "../components/Section";
import Comments from "./comments/Comments";
import { Space } from "../components/palette";
import HowIsHeGoing from "./stories/HowIsHeGoing";
import TotalProgress from "./progress/TotalProgress";
import HelpThisPoorGuy from "./stories/HelpThisPoorGuy";
import IncomingSchedules from "./schedules/IncomingSchedules";

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
  @media (min-width: 800px) and (max-width: 1000px) {
    border: 2px solid #efefef;
    border-top: none;
    border-bottom: none;
  }
  @media (min-width: 1000px) and (max-width: 1200px) {
    border: 2px none #efefef;
    border-right-style: solid;
  }
  @media (min-width: 1200px) {
    border: 2px solid #efefef;
    border-top: none;
    border-bottom: none;
  }
`;

const Side = styled.div`
  display: none;
  @media (min-width: 1000px) {
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
  @media (max-width: 1000px) {
    display: unset;
  }
`;
