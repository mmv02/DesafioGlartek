import React from 'react';

function CityRow(props) {
  const indice = (props.lista).length-1;
  return (
    <div className="card m-auto w-50  shadow p-4 mb-4 bg-white">  
      <div className="card-body">
        <h4 className="card-title">{props.nome}</h4>
        <p className="card-text text-muted">{props.codigo}</p>
        <p className="card-text m-0">{(props.lista[indice].main.temp-273.15).toFixed(2)} ºC</p>
        <p className="card-text">{props.lista[indice].weather[0].main} ({props.lista[indice].weather[0].description}) </p>
        <p className="card-text">Velocidade do vento: {props.lista[indice].wind.speed} milhas/h </p>
        <p className="card-text text-muted "><small>Dados de {props.lista[indice].dt_txt}</small> </p>
      </div> 
    </div>
  );
}

export default CityRow;