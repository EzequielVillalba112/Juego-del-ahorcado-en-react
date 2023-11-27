import Contexto from "./Contexto";

export default function Provider({children}) {
  return (
    <Contexto.Provider value={{

    }}>
        {children}
    </Contexto.Provider>
  )
}