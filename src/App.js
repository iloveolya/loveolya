import Timer from "./components/02-WhyILoveYou/Timer/Timer";
import styles from "./App.module.css";
import Navbar from "./components/01-Navbar/Navbar";
import WhyILoveYou from "./components/02-WhyILoveYou/WhyILoveYou";
import { Routes, Route } from "react-router-dom";
import HowILoveYou from "./components/03-HowILoveYou/HowILoveYou";
import HowIFuckYou from "./components/04-HowIFuckYou/HowIFuckYou";
import { useState } from 'react';

const App = (props) => {
  const date1 = new Date("Saturday, 26 March 2023 08:50:00")
  const date2 = new Date("Friday, 26 April 2023 22:21:00")

  const mainPass = "12082022"

  const [writedPass, setWritedPass] = useState('')
  const [enterPass, setEnterPass] = useState('')

  if (enterPass !== mainPass) {
    return (
      <div className={styles.app} style={{
        paddingTop: "300px",
        textAlign: "center"
      }}>
        <div style={{
          fontSize: "23px",
          fontWeight: "500"
        }}>Пароль ннада...</div>
        <input value={writedPass} onChange={(event) => setWritedPass(event.currentTarget.value)} style={{
          borderRadius: "5px",
          textAlign: "center"
        }} /><br />
        <button style={{
          marginTop: "10px",
          height: "30px",
          width: "150px"
        }} onClick={() => setEnterPass(writedPass)}>Ну на...</button>
      </div>
    )
  }

  return (
    <div className={styles.app}>
      <Timer date1={date1} date2={date2} />
      <Navbar />
      <Routes>
        <Route path="/WhyILoveYou" element={<WhyILoveYou />} />
        <Route path="/HowILoveYou" element={<HowILoveYou />} />
        <Route path="/HowIFuckYou" element={<HowIFuckYou />} />
      </Routes>
      <div className={styles.forever}>12.08.22 - навсегда</div>
    </div>
  );
};

export default App;
