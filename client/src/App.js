import './App.css';
import {useEffect, useState} from "react"; 
import Axios from 'axios';



function App() {

  var listaDados = [];

  const lista = () => {
    return(
      listaDados.forEach( element => 
        <div className="card">  
        <div className="card-body">
          <h4 className="card-title">{element[0]}</h4>
          <p className="card-text">{element[1]}</p>
          <a href="#" className="btn btn-primary" > Ver histórico</a>
        </div>
      </div>
    ))}

  const atualizarDados = () => {
    Axios.post("http://127.0.0.1:3020/refresh",{
      message:"Atualizar"
    }).then((response)=>{
      listaDados = response.data;
    })
        
  }
  // atualizar a cada 20 minutos
  atualizarDados();
  

  setInterval(atualizarDados,1200000)

  const receberDados = () => {
  /*const receberDados = () => {
    Axios.get("http://127.0.0.1:3020/cities").then((response) =>{
     setListaDados(JSON.parse(response.data));
     console.log(listaDados);
    });
  };
  };*/


  return (
    <div className="App container">
      <div className="card">  
        <div className="card-body">
          <h4 className="card-title">Lisboa</h4>
          <p className="card-text">{
            listaDados.forEach(element => {
              console.log(listaDados);
            })}</p>
          <a href="#" className="btn btn-primary" onLoad={receberDados}>Ver histórico</a>
        </div>
      </div>
    </div>
  );
}

export default App;
