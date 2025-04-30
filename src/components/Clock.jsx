import React, { useEffect, useState } from "react";

const Clock = ({ timeZone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  const formattedTime = time.toLocaleTimeString("es-ES", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formattedDate = time.toLocaleDateString("es-ES", {
    timeZone,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <p className="h5">
        Hora actual en <span className="fw-bold">{timeZone}</span>:
      </p>
      <p className="display-4">{formattedTime}</p>
      <p className="text-muted">{formattedDate}</p>
    </div>
  );
};

export default Clock;
