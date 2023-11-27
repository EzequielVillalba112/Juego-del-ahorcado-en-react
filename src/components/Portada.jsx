import { useNavigate } from "react-router-dom"

export default function Portada() {

  const navigate = useNavigate()

  return (
    <>
      <h1>Bienvenido</h1>
      <button onClick={()=>navigate('/juego')}>Jugar</button>
    </>
  )
}