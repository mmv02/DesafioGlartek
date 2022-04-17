import './App.css';
import CityList from './components/CityList.js';
import {useState} from "react";
import Axios from 'axios';




function App() {
  
  const [listaDados, setListaDados] = useState([]);
  
  const atualizarDados = () => {
    Axios.post("http://127.0.0.1:3020/refresh",{
      message:"Atualizar"
    }).then((response)=>{
      setListaDados(response.data);
    })
  
  }
  atualizarDados();
  // atualizar a cada 20 minutos
  
  return (
    <div className="App container">
      <CityList dados={listaDados} />
    </div>
  );
}

export default App;