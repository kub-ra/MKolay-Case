import { React, useState, useEffect } from 'react'
import { Td } from 'react-super-responsive-table';

function Timer({ end_date }) {
  const [time, setTime] = useState('');
  const [counter, setCounter] = useState('');
  setInterval(() => {
    setCounter(counter + 1)
  }, 1000);
  useEffect(() => {
    let endDate = new Date(end_date).getTime();
    const now = new Date().getTime();
    var distance = endDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    days = days < 10 ? `0${days}` : days;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    setTime(`${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`);
  }, [end_date, counter]);

  return <Td>{time}</Td>;

}

export default Timer