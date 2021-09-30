import "./styles.css";

import React, { useState } from "react";
// import ReturnChange from "./ReturnChange";

export default function App() {
  const [dob, setDob] = useState("");
  const [luckyNum, setLuckyNum] = useState(0);
  const [lucky, setLucky] = useState("");

  const dobSumFunc = (dob) => {
    dob = dob.replaceAll("-", "");
    let dobSum = 0;
    for (let i = 0; i < dob.length; i++) {
      dobSum += Number(dob.charAt(i));
    }
    return dobSum;
  };

  const checkLucky = (dobSum) => {
    if (dobSum % luckyNum === 0)
      setLucky(luckyNum + " is actually a lucky Number");
    else setLucky(luckyNum + " is not that lucky");
  };

  const handleClick = () => {
    const dobSum = dobSumFunc(dob);
    checkLucky(dobSum);
  };

  return (
    <div className="App">
      <h1>Is your Birthday Lucky?</h1>
      {/* <form> */}
      <label htmlFor="date-of-birth">Date of Birth : </label>
      <input
        onChange={(e) => setDob(e.target.value)}
        type="date"
        className="date-of-birth"
      />
      <br />
      <label htmlFor="lucky-number">Lucky Number : </label>
      <input
        selected={dob}
        onChange={(e) => setLuckyNum(e.target.value)}
        type="number"
        className="lucky-number"
      />
      <br />
      <button onClick={handleClick} id="check_number">
        Check Number
      </button>
      <br />
      <textarea type="text" value={lucky} readOnly></textarea>
      {/* </form> */}
    </div>
  );
}
