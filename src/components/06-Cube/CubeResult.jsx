import styles from './Cube.module.css';
import result1 from '../../assets/1.jpg';
import result2 from '../../assets/2.jpg';
import result3 from '../../assets/3.jpg';
import result4 from '../../assets/4.jpg';
import result5 from '../../assets/5.jpg';
import result6 from '../../assets/6.jpg';
import result7 from '../../assets/7.jpg';
import result8 from '../../assets/8.jpg';
import result9 from '../../assets/9.jpg';
import result10 from '../../assets/10.jpg';
import result11 from '../../assets/11.jpg';
import result12 from '../../assets/12.jpg';
import jopa from '../../assets/jopa.jpg';
import question from '../../assets/question.png';
import { useEffect, useState } from 'react';

function CubeResult({ result }) {
  const [resultImg, setResultImg] = useState(question);

  useEffect(() => {
    setResultImg(
      result != null
        ? result <= 0.08
          ? result1
          : result > 0.08 && result <= 0.16
          ? result2
          : result > 0.16 && result <= 0.24
          ? result3
          : result > 0.24 && result <= 0.32
          ? result4
          : result > 0.32 && result <= 0.36
          ? result5
          : result > 0.36 && result <= 0.4
          ? jopa
          : result > 0.4 && result <= 0.48
          ? result6
          : result > 0.48 && result <= 0.56
          ? result7
          : result > 0.56 && result <= 0.6
          ? result8
          : result > 0.6 && result <= 0.64
          ? jopa
          : result > 0.64 && result <= 0.72
          ? result9
          : result > 0.72 && result <= 0.8
          ? result10
          : result > 0.8 && result <= 0.88
          ? result11
          : result > 0.88 && result <= 0.94
          ? result12
          : result > 0.94
          ? jopa
          : null
        : question
    );
  }, [result]);

  return (
    <div>
      <img src={resultImg} width="150" height="150" />
    </div>
  );
}

export default CubeResult;
