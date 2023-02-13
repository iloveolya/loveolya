import { useState } from 'react';
import Password from './Password';
import styles from './Posilka.module.css';
import PosilkaContent from './PosilkaContent';

function PosilkaContainer() {
  const [access, setAccess] = useState(0);

  if (access === 0) {
    return (
      <div className={styles.posilka}>
        <Password setAccess={setAccess} />
      </div>
    );
  }

  return (
    <div className={styles.posilka}>
      <PosilkaContent />
    </div>
  );
}

export default PosilkaContainer;
