import React, { useState } from "react";
import Clock from "./components/Clock";
import TimeZoneSelector from "./components/TimeZoneSelector";

const App = () => {
  const [timeZone, setTimeZone] = useState("Europe/Madrid");

  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-header">
          <h1 className="mb-0">Reloj Mundial</h1>
        </div>
        <div className="card-body">
          <TimeZoneSelector timeZone={timeZone} setTimeZone={setTimeZone} />
          <Clock timeZone={timeZone} />
        </div>
      </div>
    </div>
  );
};

export default App;
