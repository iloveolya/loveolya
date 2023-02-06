import Timer from "./components/02-WhyILoveYou/Timer/Timer";
import styles from "./App.module.css";
import Navbar from "./components/01-Navbar/Navbar";
import WhyILoveYou from "./components/02-WhyILoveYou/WhyILoveYou";
import { Routes, Route } from "react-router-dom";
import HowILoveYou from "./components/03-HowILoveYou/HowILoveYou";
import HowIFuckYou from "./components/04-HowIFuckYou/HowIFuckYou";
import { useState } from 'react';
import February from './components/039-February/February';

const App = (props) => {
  const date1 = new Date("Saturday, 11 Feb 2023 08:50:00")
  const date2 = new Date("Saturday, 25 March 2023 08:50:00")
  // const date3 = new Date("Friday, 26 April 2023 22:21:00")

  // const mainPass = "12082022"

  const [loveMe, setLoveMe] = useState(0)

  if (loveMe !== 1) {
    return (
      <div className={styles.app} style={{
        paddingTop: "300px",
        textAlign: "center"
      }}>
        {/* <div style={{
          fontSize: "23px",
          fontWeight: "500"
        }}>Знаю, пароль заебал<br />
          Теперь вместо него всего один вопрос и один возможный ответ</div> */}
        <h1>Любишь меня?</h1><br />
        <button style={{
          height: "50px",
          width: "200px"
        }} onClick={() => setLoveMe(1)}>Да!</button>
      </div>
    )
  }

  return (
    <div className={styles.app}>
      <Timer date1={date1} date2={date2} />
      <Navbar date={date1} />
      <Routes>
        <Route path="/WhyILoveYou" element={<WhyILoveYou />} />
        <Route path="/HowILoveYou" element={<HowILoveYou />} />
        <Route path="/February" element={<February date={date1} />} />
        <Route path="/HowIFuckYou" element={<HowIFuckYou />} />
      </Routes>
      <div className={styles.forever}>12.08.22 - навсегда</div>
    </div>
  );
};

export default App;
