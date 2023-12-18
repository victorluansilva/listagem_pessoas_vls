import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import "./form-pessoa.style.css";

const FormPessoa = ({onSelected, handleSubmit, resetSelected }) => {
  const [pessoa, setPessoa] = useState({});
  
  useEffect(() => {
    setPessoa(onSelected);
  }, [onSelected]);

  const submit = (e) =>{
    e.preventDefault();
    console.log(pessoa)
    handleSubmit(pessoa).then((result) =>{
      if (result){
        resetSelected();
      }
    })
  }

  return (
    <div id="componentes_form">
      <TextField
        id="inNome"
        label={onSelected.nome?onSelected.nome:"Nome"}
        variant="outlined"
        defaultValue={onSelected.nome}
        onChange={(e) => {
          setPessoa({ ...pessoa, nome: e.target.value });
        }}
      />
      <TextField
        id="inSobrenome"
        label={onSelected.sobrenome?onSelected.sobrenome:"Sobrenome"}
        variant="outlined"
        defaultValue={onSelected.sobrenome}
        onChange={(e) => {
          setPessoa({ ...pessoa, sobrenome: e.target.value });
        }}
      />
      <TextField
        id="inIdade"
        label={onSelected.idade?onSelected.idade:"Idade"}
        variant="outlined"
        defaultValue={onSelected.idade}
        onChange={(e) => {
          setPessoa({ ...pessoa, idade: e.target.value });
        }}
      />

      <Button type="submit" variant="outlined" onClick={submit}>
        Botão
      </Button>
    </div>
  );
};

export default FormPessoa;
