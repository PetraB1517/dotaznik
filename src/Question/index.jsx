import React, { useState } from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';





const Question = ({text}) => {

  const [answered,setAnswered] = useState(false);

  const handleSelec = () => {
    setAnswered(true);
  }
  return (

    <div className="question">
      <QuestionBody 
        iconType={answered == false? "symbolQuestion": "symbolTick"}
        text={text}
      />
      <div className="question__options">
        <Option type="smileyStrongYes" text="Souhlasím" onSelected={handleSelec}/>
        <Option type="smileyYes" text="Spíše souhlasím" onSelected={handleSelec}/>
        <Option type="smileyNeutral" text="Nevím" onSelected={handleSelec}/>
        <Option type="smileyNo" text="Spíše nesouhlasím" onSelected={handleSelec}/>
        <Option type="smileyStrongNo" text="Nesouhlasím" onSelected={handleSelec}/>
      </div>
    </div>
    );
  };

export default Question;
