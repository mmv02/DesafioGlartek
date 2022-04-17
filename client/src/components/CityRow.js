import React from 'react';

function CityRow(props) {
  return (
    <div className="card">  
    <div className="card-body">
      <h4 className="card-title">{props.nome}</h4>
      <p className="card-text">{props.codigo}</p>
      <p className="card-text">{(props.temperatura-273.15).toFixed(2)}º C</p>
      <button type="button" class="btn btn-primary" data-bs-toggle={"#modal"+props.nome} data-bs-target={"#modal"+props.nome}>
        Ver histórico
      </button>
      <div class="modal" id={"modal"+props.nome}>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Modal Heading</h4>
            <button type="button" class="btn-close" data-bs-dismiss={"modal"+props.nome}></button>
          </div>
          <div class="modal-body">
            {props.lista.forEach(element => {
                return<p>{element.main.temp}</p>
            })}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss={"modal"+props.nome}>Close</button>
          </div>

        </div>
      </div>
    </div>
    </div>  
  </div>
  );
}

export default CityRow;