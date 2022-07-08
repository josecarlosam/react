import * as React from "react";
import paisesJson from "./listaDePaises.json";
import PaisesProbabilidade from "./PaisesProbabilidade";

class Pais {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

class PaisProbabilidade {
  constructor(code, probability) {
    this.code = code;
    this.probability = probability;
  }
}

export default function Paises(props) {
  console.log("Paises props.name: " + props.name);
  //console.log("paisesJson: " + paisesJson)

  // Lê o arquivo json com os pais e criar pais objetos
  let paisesObjetos = paisesJson.map((it) => {
    //console.log("name: " + it.name + " - code: " + it.code + " - class: " + it.name.constructor.name)
    return new Pais(it.name, it.code);
  });
  //console.log("paisesObjetos: " + paisesObjetos)

  let paisesProbabilidade = PaisesProbabilidade(props.name)
  //console.log("App paisesProbabilidade: " + paisesProbabilidade)

  let paisProbabilidadeObjetos = paisesProbabilidade.map((pp) => {
    return new PaisProbabilidade(pp.country_id, pp.probability) 
  })
  //console.log('paisProbabilidadeObjetos: ' + paisProbabilidadeObjetos)

  const probalidades = paisProbabilidadeObjetos.map((ppo) => ppo.probability)
  //console.log('probalidades:' + probalidades + ' - class: ' + probalidades.constructor.name)

  const maiorProbalidade = Math.max(...probalidades)
  //console.log('maiorProbalidade:' + maiorProbalidade)

  let paisDoNome = ''
  paisProbabilidadeObjetos.filter((paisProbabilidade) => {
    //console.log("paisProbabilidade: " + paisProbabilidade.code + ' - probabilidade: ' + paisProbabilidade.probability)
    if (paisProbabilidade.probability === maiorProbalidade) {
      paisesObjetos.filter((pais) => {
        //console.log("pais: " + pais + " code: " + pais.code + " - name: " + pais.name)
        if (paisProbabilidade.code === pais.code) {
          //console.log("2 pais: " + pais + " code: " + it.code + " - name: " + it.name)
          paisDoNome = pais.name
          return true;
        }
        return false;
      })
    }
  })
  //console.log('paisDoNome:' + paisDoNome)

  return (
    <div>
      <h2>Pais</h2>
      <div>
        {paisDoNome}
      </div>
    </div>
  )
}
