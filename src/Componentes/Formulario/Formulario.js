import React, { useState } from 'react';
import * as yup from 'yup';
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import './Formulario.css';

const Formulario = () => {
  const times = [
    'Novas lixeiras',
    'TROCAR LIXEIRA',
    'COLETA',
    'MATERIAL TOXICO',
  ];
 
  
 
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await schema.validate(data, { abortEarly: false });
    setErrors({});
  } catch (error) {
    const validationErrors = {};

    error.inner.forEach((erro) => {
      validationErrors[erro.path] = erro.message;
    });

    setErrors(validationErrors);
  }
};


  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    nome: '',
    cpf: '',
    local: '',
    tipo_servico: '',
  });

  const schema = yup.object({
    nome: yup.string().required("O CAMPO NOME É OBRIGATORIO"),
    cpf: yup.string().length(11).required("PREENCHA O CPF "),
    local: yup.string().required("PREENCHA O LOCAL "),
    tipo_servico: yup.string().required( "SELECIONE O SERVIÇO"),
  });


  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
        <h2> Insira os dados </h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" value={data.nome} onChange={(e) => setData({ ...data, nome: e.target.value })} />
        {errors.nome && <span className="error-message">{errors.nome}</span>}
      <CampoTexto label="Cpf" placeholder="Digite seu cpf" value={data.cpf} onChange={(e) => setData({ ...data, cpf: e.target.value })} />
        {errors.cpf && <span className="error-message">{errors.cpf}</span>}
        <CampoTexto label="Local" placeholder="Digite o endereço"  value={data.local} onChange={(e) => setData({ ...data, local: e.target.value })} />
        {errors.local && <span className="error-message">{errors.local}</span>}
        <ListaSuspensa itens={times} label="Tipo de serviço"  value={data.tipo_servico} onChange={(e) => setData({ ...data, tipo_servico: e.target.value })} />
        {errors.tipo_servico && <span className="error-message">{errors.tipo_servico}</span>}
       
        <Botao texto="Continuar" />
      </form>
    </section>
  ); 
  

}

export default Formulario;
