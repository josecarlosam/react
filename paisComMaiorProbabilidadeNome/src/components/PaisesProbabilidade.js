import * as React from "react";  
   
export default function PaisesProbabilidade(nome) {
  const [paisesProbabilidade, setPaisesProbabilidade] = React.useState([])

  //console.log("PaisesProbabilidade nome: " + nome);

  React.useEffect(() => {
    fetch("https://api.nationalize.io/?name=" + nome)
      .then((response) => response.json())
      .then((data) => {
      let paisesProbabilidade = []
      try {
        //console.log("data: " + data)
        //console.log("data.country: " + data.country)
        paisesProbabilidade = data.country
        //console.log("paisesProbabilidade: " + paisesProbabilidade)
      } catch (error) {
        console.log('try catch error: ' + error)
      }
      setPaisesProbabilidade(paisesProbabilidade)
    });  
  }, []);

  return paisesProbabilidade
}
