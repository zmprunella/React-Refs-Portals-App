import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerNAme] = useState(null);

  function handleClick() {
    setEnteredPlayerNAme(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknow entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
