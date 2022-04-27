import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetingFromServer } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greetings } = useSelector((state) => state.greetings);
  console.log(greetings);
  const [state, setState] = useState(false);

  const newGreeting = () => {
    setState(() => false);
    dispatch(getGreetingFromServer());
  };

  useEffect(() => {
    dispatch(getGreetingFromServer());
  }, [dispatch]);

  useEffect(() => {
    setState(() => greetings);
  }, [greetings]);

  return (
    <div className="container">
      <h1>Hello in Five Languages 😃</h1>
      <button type="button" onClick={newGreeting}>Get Greetings</button>
      <h1 className="greeting">{state ? greetings.text : 'just a minute...'}</h1>
    </div>
  );
};

export default Greeting;
