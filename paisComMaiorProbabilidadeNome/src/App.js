import "./styles.css";
import * as React from "react";
import Paises from "./components/Paises";

export default function App() {
  const [nome, setNome] = React.useState("")
  const [pais, setPais] = React.useState("")
  //console.log("nome: " + nome)

  function limpaPagina() {
    window.location.reload()
  }

  function clickNoBotao(event, novoNome) {
    //console.log("clickNoBotao novoNome: " + novoNome)
    setPais(<Paises
              name={novoNome}>
            </Paises>)  
  };

  return (
    <div>
      <label>Digite o seu nome: </label>
      <input
        type="text"
        placeholder="Informe o seu nome"
        name="nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
      <p></p>
      <button 
        onClick={e => limpaPagina(e)}>
        Limpar
      </button>
      <button 
        onClick={e => clickNoBotao(e, nome)}>
        Confirma
      </button>
      {pais}
    </div>
  )
}
