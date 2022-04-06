import './App.css';
import {useEffect, useState} from "react"; 
import Axios from 'axios';
function App() {

  const [listaDados, setListaDados] = useState([]);


  const receberDados = () => {
    Axios.get("http://127.0.0.1:3020/cities").then((response) =>{
     setListaDados(JSON.parse(response.data));
     console.log(listaDados);
    });
  };

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
