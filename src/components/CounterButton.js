import { useState } from "react"

function CounterButton(props) {

  const [clickAmount, setClickAmount] = useState(0);

  // const handleClick = (event) => setState(event.target.value ? event.target.value : "")
  const handleClick = () => {
    setClickAmount(clickAmount + 1);
    props.increaseAnger(0.1)
  }

  return (
    <button className="CounterButton" onClick={handleClick}>
      You clicked me {clickAmount} amount of times
    </button>
  );
}

export default CounterButton;
