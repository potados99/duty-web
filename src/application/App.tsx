import React from "react";
import HowIsHeGoing from "./stories/HowIsHeGoing";
import TotalProgress from "./progress/TotalProgress";
import HelpThisPoorGuy from "./stories/HelpThisPoorGuy";
import IncomingSchedules from "./schedules/IncomingSchedules";
import Section from "../components/Section";
import Footer from "./footer/Footer";
import { Space } from "../components/palette";

function App() {
  return (
    <div>
      <Section backgroundColor="#f2f2f8">
        <TotalProgress />
      </Section>

      <Space />

      <Section backgroundColor="#f2f2f8">
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

      <Space />

      <Section backgroundColor="#f2f2f8">
        <Footer />
      </Section>
    </div>
  );
}

export default App;
