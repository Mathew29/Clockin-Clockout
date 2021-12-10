import React, {useState, useEffect} from "react";


const Times = () => {

const initialState = null
const [hour, setHour] = useState(initialState)
const [minutes, setMinutes] = useState(initialState)
const [seconds, setSeconds] = useState(initialState)
const [amPm, setAmPm] = useState(initialState)

useEffect(() => {
    let today = new Date();
    let minute = today.getMinutes()
    let hours = today.getHours()
    
    let ampm = hours >= 12 ? 'pm': 'am'
    hours = hours % 12;
    hours = hours ? hours : 12; //the hour 0 should be 12
    minute = minute < 10 ? '0' + minute : minute
    
    let timer = setInterval(() => {
        let second = today.getSeconds() + 1 // +1 to fix minute changing at 59 seconds
        second = second < 10 ? '0' + second : second
        second = second === 60 ? '00' : second // show 00 instead of 60 seconds
        setSeconds(String(second))

    }, 1000)
    setHour(String(hours))
    setMinutes(String(minute))
    
    setAmPm(ampm)


    return () => {
        clearInterval(timer)
    }
}, [seconds])


  return (
    <div>
      <h1>{hour}:{minutes}:{seconds} {amPm}</h1>
    </div>
  );
};

export default Times;
