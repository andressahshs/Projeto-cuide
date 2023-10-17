import React from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value} 
        onChange={props.onChange} 
      />
    </div>
  );
};







export default CampoTexto