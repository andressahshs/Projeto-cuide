
import React from 'react';
import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
  return( 
    <div>
      <label>{props.label}</label>
      <select value={props.value}> {}
        {props.itens.map(item => <option key={item}>{item}</option> )}
      </select>
    </div>
  );
}












 export default ListaSuspensa;