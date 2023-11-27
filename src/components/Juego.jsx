import { useState } from 'react'
import {Questions} from '../data/data'
import { useEffect } from 'react';

export default function Juego() {
 
  const [azar, setAzar] = useState(0);
  const [palabra, setPalabra] = useState([]);
 
  useEffect(()=>{
    //Consigue un numero al azar segun la cantidad de 
    //preguntas que haya.
    setAzar( Math.floor(Math.random() * Questions.length));
  }, [])

  useEffect(()=>{
    //dividir un string en letras y representar cada 
    //letra como un elemento individual utilizando el método split
    setPalabra(Questions[azar].palabro.split(""));
  },[azar])

  return (
    <>
      <div className="pregunta">
        {Questions[azar].pregunta}
      </div>
      <div className="palabras">
        {palabra.map((letra)=>{
          <div className='letras'></div>
        })}
      </div>
      <div className="botones"></div>
      <div className="img"></div>
    </>
  )
}