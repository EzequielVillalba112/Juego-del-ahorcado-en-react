import { Route, Routes } from "react-router-dom";
import "./App.css";
import Portada from "./components/Portada";
import Ganado from "./components/Ganado";
import Final from "./components/Final";
import Provider from "./context/Provider";
import Juego from "./components/Juego";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/juego" element= {<Juego />} />
        <Route path="/ganador" element={<Ganado />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Provider>
  );
}

export default App;
