import { useState } from 'react';
import {Questions} from '../../data/data.js'
import { useEffect } from 'react';
import Question from './Question.jsx';

export default function QuestionAnswer() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const questionRandom = () =>{
        // genero un índice aleatorio usando Math.random()
        //multiplicamos ese número por la longitud del array y luego utilizamos Math.floor() para obtener un índice entero. 
        let indexRandom = Math.floor(Math.random()* Questions.length);
        
        let questionRandom = Questions[indexRandom];

        setQuestion(questionRandom.pregunta);
        setAnswer(questionRandom.palabro);
    }

  return (
    <div>
        <Question question={question} answer={answer} value={"N"}/>
        
        <button onClick={questionRandom}>Iniciar</button>
    </div>
  )
}