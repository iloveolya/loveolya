import { useEffect, useState } from 'react';

function February({ date }) {
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

  const pStyles = {
    marginBottom: '20px',
  };

  return (
    <div
      style={{
        width: '90%',
        textAlign: 'center',
        backgroundColor: 'pink',
        color: 'red',
        marginLeft: 'auto',
        padding: '5px',
        marginRight: 'auto',
        marginTop: '10px',
        marginBottom: '100px',
        borderRadius: '20px',
        border: '2px solid red',
        fontSize: 'larger',
      }}
    >
      <h2
        style={{
          fontFamily: 'Caveat, cursive',
        }}
      >
        Я тебя люблю!!!
      </h2>
      <p style={pStyles}>
        Солнышко, я приеду как только ты решишь свои проблемы
      </p>
      <p style={pStyles}>
        Я не буду больше тебя торопить или ставить перед фактом
      </p>
      <p style={pStyles}>
        Если всё пойдёт так, как мы планируем, то я буду рядом уже через{' '}
        {`${diffDays} ${
          2 === diffDays || 3 === diffDays || diffDays === 4
            ? 'дня'
            : diffDays === 1
            ? 'день'
            : 'дней'
        }`}
      </p>
      <p style={pStyles}>
        Я всегда буду рядом настолько, насколько тебе это необходимо
      </p>
      <p style={pStyles}>
        Я правда очень сильно и тебя люблю и безумно сильно по тебе соскучился
      </p>
      <p style={pStyles}>Спасибо, что ты у меня есть!</p>
    </div>
  );
}

export default February;
