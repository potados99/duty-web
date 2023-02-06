import React from "react";
import HowIsHeGoing from "./stories/HowIsHeGoing";
import TotalProgress from "./progress/TotalProgress";
import HelpThisPoorGuy from "./stories/HelpThisPoorGuy";
import IncomingSchedules from "./schedules/IncomingSchedules";

function App() {
  return (
    <div>
      <TotalProgress />
      <IncomingSchedules />
      <HelpThisPoorGuy />
      <HowIsHeGoing />
    </div>
  );
}

export default App;
