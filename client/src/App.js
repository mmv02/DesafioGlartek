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
  
  return (
    <div className="App container">
      <p className='h1'>Meterologia</p>
      <CityList dados={listaDados} />
    </div>
  );
}

export default App;