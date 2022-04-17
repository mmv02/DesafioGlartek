import React from 'react';
import CityRow from './CityRow';


function CityList({dados}) {
  return dados.map(cidade => {
     return  <CityRow codigo={cidade.codigo} temperatura={cidade.list[0].main.temp} nome={cidade.nome} lista={cidade.list} />
  })
}

export default CityList