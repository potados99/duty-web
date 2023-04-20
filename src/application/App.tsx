import React from "react";
import HowIsHeGoing from "./stories/HowIsHeGoing";
import TotalProgress from "./progress/TotalProgress";
import HelpThisPoorGuy from "./stories/HelpThisPoorGuy";
import IncomingSchedules from "./schedules/IncomingSchedules";
import Section from "../components/Section";
import Footer from "./footer/Footer";
import { Space } from "../components/palette";
import Cover from "./cover/Cover";
import Contents from "./Contents";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <Cover />
      <Contents />
    </>
  );
}
