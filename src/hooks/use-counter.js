import {useState,useEffect } from 'react'

//For creating custom hook we first use 'use' word for signelling to react that we are using this functionalities
//as react hook. After this word you can name it any name.
//File name can be any whatever we want  to name
//We will call this custom hook just like as function, because at end its also a function
//We can return whatever we want return from a custom hook like an array, number, object
//We can write built in and stateful logic


//It use for code reusability, in many components when we have almost same code with statuful logic we can 
//create  and use custom hooks

//To make it generic for code reusability, because built in hooks also accept parameters


//forwards here we add dependency here because we have not define it in above  and inside of code
const useCounter = (forwards= true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(forwards){
      setCounter((prevCounter) => prevCounter + 1);
      }else{
        setCounter((prevCounter)=>prevCounter-1)
      }
    }, 1000);


    return () => clearInterval(interval);
  }, [forwards]);
  return counter;
};


export default useCounter;
