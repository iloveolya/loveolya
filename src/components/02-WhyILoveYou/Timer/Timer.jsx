import styles from "./Timer.module.css";
import { useEffect, useState } from "react";

const Timer = ({ date }) => {
  const [finishTime] = useState(date.getTime());
  const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const diff = (finishTime - new Date()) / 1000;
    if (diff < 0) return; // время вышло
    setDiff([
      Math.floor(diff / 86400), // дни
      Math.floor((diff / 3600) % 24),
      Math.floor((diff / 60) % 60),
      Math.floor(diff % 60),
    ]);
  }, [tick, finishTime]);

  useEffect(() => {
    const timerID = setInterval(() => setTick(!tick), 1000);
    return () => clearInterval(timerID);
  }, [tick]);

  return (
    <div className={styles.timer}>
      <span>Через</span>
      <p className={styles.timerP}>{`${diffDays} ${diffDays === 2 ? "дня" : diffDays === 1 ? "день" : "дней"} ${diffH
        .toString()
        .padStart(2, "0")}:${diffM.toString().padStart(2, "0")}:${diffS
        .toString()
        .padStart(2, "0")}`}</p>
      <span>я тебя поцелую!</span>
      <div>
        {(diffDays === 1 && diffH >= 11) || diffDays === 2 ? (
          diffDays === 2 ? (
            <div className={styles.trainToLoveContainer}>
              {diffH === 9 || diffH === 8 ? <span className={styles.trainToLove}>🐵___________🚆</span> : null}
              {diffH === 7 || diffH === 6 ? <span className={styles.trainToLove}>🐵__________🚆</span> : null}
              {diffH === 5 || diffH === 4 ? <span className={styles.trainToLove}>🐵_________🚆</span> : null}
              {diffH === 3 || diffH === 2 ? <span className={styles.trainToLove}>🐵________🚆</span> : null}
              {diffH === 1 || diffH === 0 ? <span className={styles.trainToLove}>🐵_______🚆</span> : null}
            </div>
          ) : diffDays === 1 ? (
            <div className={styles.trainToLoveContainer}>
              {diffH === 24 ? <span className={styles.trainToLove}>🐵_______🚆</span> : null}
              {diffH === 23 || diffH === 22 ? <span className={styles.trainToLove}>🐵______🚆</span> : null}
              {diffH === 21 || diffH === 20 ? <span className={styles.trainToLove}>🐵_____🚆</span> : null}
              {diffH === 19 || diffH === 18 ? <span className={styles.trainToLove}>🐵____🚆</span> : null}
              {diffH === 17 || diffH === 16 ? <span className={styles.trainToLove}>🐵___🚆</span> : null}
              {diffH === 15 || diffH === 14 ? <span className={styles.trainToLove}>🐵__🚆</span> : null}
              {diffH === 13 || diffH === 12 ? <span className={styles.trainToLove}>🐵_🚆</span> : null}
              {diffH === 11 ? <span className={styles.trainToLove}>🐵🚆</span> : null}
            </div>
          ) : null
        ) : null}
        {(diffDays === 1 && diffH < 11) || diffDays === 0 ? (
          diffDays === 0 ? (
            <div className={styles.trainToLoveContainer}>
              {diffH === 23 || diffH === 22 ? <span className={styles.trainToLove}>🚆____________🐵</span> : null}
              {diffH === 21 || diffH === 20 ? <span className={styles.trainToLove}>🚆___________🐵</span> : null}
              {diffH === 19 || diffH === 18 ? <span className={styles.trainToLove}>🚆__________🐵</span> : null}
              {diffH === 17 || diffH === 16 ? <span className={styles.trainToLove}>🚆_________🐵</span> : null}
              {diffH === 15 || diffH === 14 ? <span className={styles.trainToLove}>🚆________🐵</span> : null}
              {diffH === 13 || diffH === 12 ? <span className={styles.trainToLove}>🚆_______🐵</span> : null}
              {diffH === 11 || diffH === 10 ? <span className={styles.trainToLove}>🚆______🐵</span> : null}
              {diffH === 9 || diffH === 8 ? <span className={styles.trainToLove}>🚆_____🐵</span> : null}
              {diffH === 7 || diffH === 6 ? <span className={styles.trainToLove}>🚆____🐵</span> : null}
              {diffH === 5 || diffH === 4 ? <span className={styles.trainToLove}>🚆___🐵</span> : null}
              {diffH === 3 || diffH === 2 ? <span className={styles.trainToLove}>🚆__🐵</span> : null}
              {diffH === 1 || (diffH === 0 && diffM >= 1) ? <span className={styles.trainToLove}>🚆_🐵</span> : null}
              {diffH === 0 || diffM < 1 ? <span className={styles.trainToLove}>🚆🐵</span> : null}
            </div>
          ) : diffDays === 1 ? (
            <div className={styles.trainToLoveContainer}>
              {diffH === 11 || diffH === 10 ? <span className={styles.trainToLove}>🚆__________________🐵</span> : null}
              {diffH === 9 || diffH === 8 ? <span className={styles.trainToLove}>🚆_________________🐵</span> : null}
              {diffH === 7 || diffH === 6 ? <span className={styles.trainToLove}>🚆________________🐵</span> : null}
              {diffH === 5 || diffH === 4 ? <span className={styles.trainToLove}>🚆_______________🐵</span> : null}
              {diffH === 3 || diffH === 2 ? <span className={styles.trainToLove}>🚆______________🐵</span> : null}
              {diffH === 1 || diffH === 0 ? <span className={styles.trainToLove}>🚆_____________🐵</span> : null}
            </div>
          ) : null
        ) : null}
      </div>
    </div>
  );
};

export const TrainTrip = ({date}) => {

  const [finishTime] = useState(date.getTime());
  const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const diff = (finishTime - new Date()) / 1000;
    if (diff < 0) return; // время вышло
    setDiff([
      Math.floor(diff / 86400), // дни
      Math.floor((diff / 3600) % 24),
      Math.floor((diff / 60) % 60),
      Math.floor(diff % 60),
    ]);
  }, [tick, finishTime]);

  useEffect(() => {
    const timerID = setInterval(() => setTick(!tick), 1000);
    return () => clearInterval(timerID);
  }, [tick]);

  const allSeconds = diffDays * 86400 + diffH * 3600 + diffM * 60 + diffS

  return (
      <div className={styles.trainTrip}>
          <h2>Пока я в поезде </h2>
          <span>Осталось: {allSeconds} секунд</span>
      </div> 
  )
}

export default Timer;
