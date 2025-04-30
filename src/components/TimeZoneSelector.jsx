import React from "react";

const TimeZoneSelector = ({ timeZone, setTimeZone }) => {
  const timeZones = [
    "Europe/Madrid",
    "America/New_York",
    "Asia/Tokyo",
    "Europe/London",
    "Australia/Sydney",
  ];

  return (
    <div className="mb-4">
      <label htmlFor="timezone" className="form-label">
        Zona Horaria:
      </label>
      <select
        id="timezone"
        className="form-select"
        value={timeZone}
        onChange={(e) => setTimeZone(e.target.value)}
      >
        {timeZones.map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeZoneSelector;
