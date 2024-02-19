import './App.css';

import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

import { useState, useReducer } from 'react';

function App() {

  const [angryApp, dispatch] = useReducer((angryApp, amount) => {
    return angryApp > 1 ? 0 : angryApp + amount;
  }, 0);

  const [light, setLight] = useState('off');
  const dark = (light === 'off') ? 'dark' : '';
  const switchLight = () => {
    setLight(light === 'on' ? 'off' : 'on');
  }

  return (
    <div className={`App ${dark}`} >
      <h1>{angryApp < 1 ? "Fancy Buttons!" : "YOU'RE CLICKING TOO MANY BUTTONS!"}</h1>
      <section>
        <AngryButton increaseAnger={dispatch}/>
        <CounterButton increaseAnger={dispatch}/>
        <LightSwitchButton light={light} switchLight={switchLight} increaseAnger={dispatch}/>
        <TextRepeaterButton increaseAnger={dispatch}/>
      </section>
    </div>
  );
}

export default App;
