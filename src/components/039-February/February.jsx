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
        Солнышко, на самом деле я поступил немного глупо, потому что не
        предупредил тебя
      </p>
      <p style={pStyles}>
        Перед тем, как купить билет, я должен был посоветоваться с тобой
      </p>
      <p style={pStyles}>
        Но раз билет уже есть, до нашей встречи осталось всего{' '}
        {`${diffDays} ${
          diffDays === 2 ? 'дня' : diffDays === 1 ? 'день' : 'дней'
        }`}{' '}
      </p>
      <p style={pStyles}>
        Я правда очень сильно люблю тебя! И, блин, невероятно сильно соскучился
      </p>
      <p style={pStyles}>
        Соскучился по всей тебе, по твоему живому голосу, по твоей улыбке, по
        твоему смеху, волосам и по всему твоему телу. Соскучился по твоей маме и
        даже по твоему папе, с которым я ещё не успел хорошо подружиться
      </p>
      <p style={pStyles}>
        Конечно, если тебе очень неудобно, то это будет не отдых, поэтому только
        скажи и я возьму билет на следующую неделю
      </p>
      <p style={pStyles}>
        Но, конечно же, я хочу увидеть тебя как можно скорее, мой прекрасный
        ангел
      </p>
      <p style={pStyles}>
        Надеюсь, сегодня тебе приснился самый прекрасный сон
      </p>
      <p style={pStyles}>Я! Тебя! Люблю!</p>
    </div>
  );
}

export default February;
