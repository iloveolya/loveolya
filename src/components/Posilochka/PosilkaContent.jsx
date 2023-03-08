import styles from './Posilka.module.css';
import { useState } from 'react';
import Schetchik from './Schetchik/Schetchik';
import ChtoUspeli from './ChtoUspeli/ChtoUspeli';

function PosilkaContent() {
  const [step, setStep] = useState(0);

  return (
    <div className={styles.posilkaContent}>
      <Schetchik />
      {step === 0 ? (
        <button onClick={() => setStep(1)}>И что мы успели?</button>
      ) : null}
      {step > 0 ? (
        <div>
          <ChtoUspeli />
          <div className={styles.iFont}>
            <h3>Я тебя люблю</h3>
            <h4>и так будет всегда!</h4>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PosilkaContent;
