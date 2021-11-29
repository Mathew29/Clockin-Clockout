import React, { useEffect, useState } from "react";

const Dates = () => {
  const initialState = null;
  const [day, setDay] = useState(initialState);
  const [weekDay, setWeekDay] = useState(initialState);
  const [month, setMonth] = useState(initialState);
  const [year, setYear] = useState(initialState);

  useEffect(() => {
    let today = new Date();
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let settingWeekDay = today.getDay();
    let settingMonth = today.getMonth();
    const findDay = (dayNum) => {
      setWeekDay(weekdays[dayNum]);
    };
    const findMonth = (monthNum) => {
      setMonth(months[monthNum]);
    };
    console.log("day", today.getDate());
    console.log("year ", today.getFullYear());
    findDay(settingWeekDay);
    findMonth(settingMonth);
    setDay(today.getDate());
    setYear(today.getFullYear());
  }, []);

  return (
    <h1>
      {weekDay}, {month} {day} {year}
    </h1>
  );
};

export default Dates;
