import React from "react";
import HowIsHeGoing from "./stories/HowIsHeGoing";
import TotalProgress from "./progress/TotalProgress";
import HelpThisPoorGuy from "./stories/HelpThisPoorGuy";
import IncomingSchedules from "./schedules/IncomingSchedules";
import Section from "../components/Section";

function App() {
  return (
    <div>
      <Section backgroundColor="#f2f2f8">
        <TotalProgress />
      </Section>

      <Section backgroundColor="#f2f2f8">
        <IncomingSchedules />
      </Section>

      <Section backgroundColor="#222">
        <HelpThisPoorGuy />
      </Section>

      <Section backgroundColor="#222">
        <HowIsHeGoing />
      </Section>
    </div>
  );
}

export default App;
