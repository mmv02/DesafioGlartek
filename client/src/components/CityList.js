import React from 'react';
import CityRow from './CityRow';


function CityList({dados}) {
  return dados.map(cidade => {
     return  <CityRow codigo={cidade.codigo} nome={cidade.nome} lista={cidade.list} />
  })
}

export default CityList