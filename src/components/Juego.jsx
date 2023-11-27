import { useState } from "react";
import { Questions } from "../data/data";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {ImgAhorcado} from "../data/img"

export default function Juego() {
  const navegacion = useNavigate();
  const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
  const colors = [{backgroundColor: '#1a1a1a'},{backgroundColor:'#108b54'}, {backgroundColor:'#d80000'}]
  //guarda la posicion aleatoria
  const [azar, setAzar] = useState(0);
  //gurada la respuesta
  const [palabra, setPalabra] = useState([]);
  //guarda las letras presionadas
  const [misLetras, setMisLetras] = useState([]);
  //guarda las letras correctas
  const [correctas, setCorrectas] = useState([]);
  //guarda las letras incorrectas
  const [incorretas, setIncorretas] = useState([]);

  const [img, setImg] = useState(1);
  useEffect(() => {
    //Consigue un numero al azar segun la cantidad de
    //preguntas que haya.
    setAzar(Math.floor(Math.random() * Questions.length));
  }, []);

  useEffect(() => {
    //dividir un string en letras y representar cada
    //letra como un elemento individual utilizando el método split
    setPalabra(Questions[azar].palabro.split(""));
  }, [azar]);

  const selected = (e) =>{
    const letra = e.target.innerHTML;
    setMisLetras([...misLetras,letra]);

    if(palabra.indexOf(letra) >= 0){
      setCorrectas([...correctas, letra]);
    }else{
      setIncorretas([...incorretas, letra]);
      setImg(img+1);
      if(img == 5){
        navegacion('/final');
      }
    }
  }

  useEffect(()=>{
    let noEncontrado = 0;
    palabra.map(palabra =>{
      if(misLetras.find(e => e === palabra)=== undefined){
        noEncontrado++;
      }
    })

    if(noEncontrado === 0 && correctas.length > 0){
      navegacion('/ganador');
    }
  },[correctas])

  
  return (
    <div className="container-ahorcado">
      <div className="pregunta">{Questions[azar].pregunta}</div>
      <div className="palabras">
        {
          palabra.map((letra, i) =>
          //si no se encuentra en la cadena original, indexOf devuelve -1.
          misLetras.indexOf(letra) === -1 ? (
            <div className="letras" key={i}></div>
          ) : (
            <div className="letras" key={i}>
              {letra.toUpperCase()}
            </div>
          )
        )}
      </div>
      <div className="botones">
        {
          abecedario.map((abeced) =>(
            (correctas.find(e => e=== abeced))
            ?
            <button style={colors[1]} className="btn-abc" key={abeced}>{abeced}</button>
            :
            (incorretas.find(e => e=== abeced))
            ?
            <button style={colors[2]} className="btn-abc" key={abeced}>{abeced}</button>
            :
            <button style={colors[0]} onClick={selected} className="btn-abc" key={abeced}>{abeced}</button>
            ))
        }
      </div>
      <div className="img">
        <img className="img-ahoracado" src={ImgAhorcado[img]}/>
      </div>
    </div>
  );
}
