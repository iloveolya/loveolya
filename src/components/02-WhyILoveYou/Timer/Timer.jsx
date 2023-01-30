import styles from './Timer.module.css';
import { useEffect, useState } from 'react';

const Timer = ({ date1, date2 }) => {
  const [finishTime] = useState(date1.getTime());
  const [finishTime2] = useState(date2.getTime());
  const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
  const [[diffDays2, diffH2, diffM2, diffS2], setDiff2] = useState([
    0, 0, 0, 0,
  ]);
  const [tick, setTick] = useState(false);
  const [tick2, setTick2] = useState(false);

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
    const diff2 = (finishTime2 - new Date()) / 1000;
    if (diff2 < 0) return; // время вышло
    setDiff2([
      Math.floor(diff2 / 86400), // дни
      Math.floor((diff2 / 3600) % 24),
      Math.floor((diff2 / 60) % 60),
      Math.floor(diff2 % 60),
    ]);
  }, [tick2, finishTime2]);

  useEffect(() => {
    const timerID = setInterval(() => setTick(!tick), 1000);
    return () => clearInterval(timerID);
  }, [tick]);
  useEffect(() => {
    const timerID2 = setInterval(() => setTick2(!tick2), 1000);
    return () => clearInterval(timerID2);
  }, [tick2]);

  return (
    <div className={styles.timer}>
      <span>Через</span>
      <p className={styles.timerP}>{`${diffDays} ${
        diffDays === 2 ? 'дня' : diffDays === 1 ? 'день' : 'дней'
      } ${diffH.toString().padStart(2, '0')}:${diffM
        .toString()
        .padStart(2, '0')}:${diffS.toString().padStart(2, '0')}`}</p>
      <span>я снова тебя поцелую, милая</span>
      <br />
      <span>А через</span>
      <p className={styles.timerP}>{`${diffDays2} ${
        diffDays2 === 2 ? 'дня' : diffDays2 === 1 ? 'день' : 'дней'
      } ${diffH2.toString().padStart(2, '0')}:${diffM2
        .toString()
        .padStart(2, '0')}:${diffS2.toString().padStart(2, '0')}`}</p>
      <span>ты встретишь меня в Пятигорске)</span>
    </div>
  );
};

export default Timer;
