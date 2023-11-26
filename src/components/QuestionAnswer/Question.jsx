import { useEffect, useState } from "react";

export default function Question({ question, answer, value }) {
  const [letters, setLetters] = useState([]);
  const [indexLetter, setIndexLetter] = useState();

  useEffect(() => {
    Array.from(answer).map((letter, index) =>
      letter === value ? setLetters(...letters,[letter]) : null
    );
  }, [answer]);

  useEffect(()=>{
    console.log(letters);
  },[answer])

  return (
    <div>
      <h2>{question}</h2>
      {Array.from(answer).map((letter, index) => (
        <div key={index}>
          {letter}
          {letter === letters? <input type="text" name={index} value={letters} onChange={(e)=>setLetters(e.target.value)}/> : null}
            {index === letters.index && <p>{letter.letra}</p>}
        </div>
      ))}
     
    </div>
  );
}
