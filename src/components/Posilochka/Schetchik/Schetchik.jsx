import { useEffect, useState } from 'react';
import styles from '../Posilka.module.css';

function Schetchik() {
  const [tick, setTick] = useState(false);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hourses, setHourses] = useState(0);
  const [days, setDays] = useState(0);
  const [month, setMonth] = useState(0);

  useEffect(() => {
    setSeconds(
      Math.floor(new Date().getTime() / 1000) -
        Math.floor(new Date(2022, 7, 12, 22, 21).getTime() / 1000)
    );
    setMinutes(Math.floor(seconds / 60));
    setHourses(Math.floor(minutes / 60));
    setDays(Math.floor(hourses / 24));
    setMonth(Math.floor(days / 30));
  }, [tick, seconds, minutes, hourses, days, month]);

  useEffect(() => {
    setInterval(() => setTick(!tick), 1000);
  });

  return (
    <div className={styles.obertka}>
      <h4>Мы вместе:</h4>
      <p>{month} месяцев</p>
      <p>{days} дней</p>
      <p>{hourses} часов</p>
      <p>{minutes} минут</p>
      <p>{seconds} секунд</p>
      <p>❤️</p>
    </div>
  );
}

export default Schetchik;
