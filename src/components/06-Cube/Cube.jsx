import { useState } from 'react';
import styles from './Cube.module.css';
import CubeResult from './CubeResult';

function Cube() {
  const [value, setValue] = useState(null);

  function generateRandomValue() {
    setValue(Math.random());
    console.log(value);
  }

  return (
    <div className={styles.cube}>
      <h1>Кинуть кубик</h1>
      <CubeResult result={value} />
      <button onClick={generateRandomValue}>Кинуть</button>
    </div>
  );
}

export default Cube;
