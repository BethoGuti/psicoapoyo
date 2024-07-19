"use client";
import { Calendar } from "@nextui-org/react";
import { parseDate, today, getLocalTimeZone } from "@internationalized/date";
import { useEffect, useState } from "react";

export const InputCalendar = ({ handleChange }) => {
  const [value, setValue] = useState(parseDate("2024-03-07"));
  useEffect(() => {
    handleChange({ target: { name: "date", value: value } });
  }, [value]);

  return (
    <Calendar
      aria-label="Date (Controlled)"
      value={value}
      maxValue={parseDate("2024-07-20")}
      minValue={today(getLocalTimeZone())}
      className="mt-3"
      name="date"
      onChange={setValue}
    />
  );
};
