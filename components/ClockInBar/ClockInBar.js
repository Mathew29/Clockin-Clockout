import React, { useEffect, useState } from "react";

const ClockInBar = () => {
  const initialState = "";
  const [employeeNumber, setEmployeeNumber] = useState(initialState);

  const replaceText = (val) => {
    console.log(val.split(" "));
    // val.split(' ')
  };

  // const handleSubmit = (evt) = {
  //   e.preventDefault()
  // }

  return (
    <div>
      <form action="submit">
        <input
          type="text"
          id="clockInOut"
          placeholder="_ _ _ _ _ _"
          value={employeeNumber}
          onChange={(e) => replaceText(e.target.value)}
        />
        <button>Clock In</button>
        <button>Clock Out</button>
      </form>
    </div>
  );
};

export default ClockInBar;
