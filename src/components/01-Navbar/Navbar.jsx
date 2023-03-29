// import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = ({ date }) => {
  // const [finishTime] = useState(date.getTime());
  // const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
  // const [tick, setTick] = useState(false);

  // useEffect(() => {
  //   const diff = (finishTime - new Date()) / 1000;
  //   if (diff < 0) return; // время вышло
  //   setDiff([
  //     Math.floor(diff / 86400), // дни
  //     Math.floor((diff / 3600) % 24),
  //     Math.floor((diff / 60) % 60),
  //     Math.floor(diff % 60),
  //   ]);
  // }, [tick, finishTime]);

  // useEffect(() => {
  //   const timerID = setInterval(() => setTick(!tick), 1000);
  //   return () => clearInterval(timerID);
  // }, [tick]);

  return (
    <div className={styles.underNavbar}>
      <div className={styles.navbar}>
        <NavLink
          to="/WhyILoveYou"
          className={(navData) =>
            navData.isActive ? styles.active : styles.item
          }
        >
          Почему я тебя люблю
        </NavLink>
        <br />
        <NavLink
          to="/HowILoveYou"
          className={(navData) =>
            navData.isActive ? styles.active : styles.item
          }
        >
          Как сильно я тебя люблю
        </NavLink>
        <br />
        <NavLink
          to="/Posilka"
          className={(navData) =>
            navData.isActive ? styles.active : styles.item
          }
        >
          Мы вместе уже...
        </NavLink>
        <NavLink
          to="/Cube"
          className={(navData) =>
            navData.isActive ? styles.active : styles.item
          }
        >
          <br />
          "КуБиК"
        </NavLink>
        <br />
        <NavLink
          to="/HowIFuckYou"
          className={(navData) =>
            navData.isActive ? styles.fuckActive : styles.fuckItem
          }
        >
          &#129397;Как я тебя трахну&#129397;
        </NavLink>
        <br />
        <span className={styles.jmai}>(жмай)</span>
      </div>
    </div>
  );
};

export default Navbar;
