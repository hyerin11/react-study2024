import React, { useRef, useState } from "react";

const Player = () => {

  const $nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('anonymous');

  const nameChangeHandler = e => {
    console.log('click!');
    setEnteredName($nameInputRef.current.value);
    $nameInputRef.current.value = ''; //입력창 빈칸으로 비우기
  };

  return (
    <section id="player">
      <h2>Welcome {enteredName}!</h2>
      <p>
        <input ref={$nameInputRef} type="text"/>
        <button onClick={nameChangeHandler}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
