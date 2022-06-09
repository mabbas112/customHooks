// import { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';
import Card from './Card';

const ForwardCounter = () => {
  //Here we calling a useCounter custom hook then states which we have defined in useCoounter
  //strongly bind with the ForwardCounter. Where where it will declare states will also bind with it.
  //Custom hooks are just functions, we can also return something from them, like in built in states, we receive an array then we destructure the array.
  const counter = useCounter();
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);


  //   return () => clearInterval(interval);
  // }, []);
 
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
