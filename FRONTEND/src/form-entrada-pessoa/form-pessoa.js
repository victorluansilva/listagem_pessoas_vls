import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import "./form-pessoa.style.css";

const FormPessoa = ({selected, handleSubmit }) => {
  const [pessoa, setPessoa] = useState({});
  
  useEffect(() => {
    setPessoa(selected);
  }, [selected]);

  const submit = (e) =>{
    e.preventDefault();
    console.log(pessoa)
    handleSubmit(pessoa);
  }

  return (
    <div id="componentes_form">
      <TextField
        id="inNome"
        label={selected.nome?selected.nome:"Nome"}
        variant="outlined"
        defaultValue={selected.nome}
        onChange={(e) => {
          setPessoa({ ...pessoa, nome: e.target.value });
        }}
      />
      <TextField
        id="inSobrenome"
        label={selected.sobrenome?selected.sobrenome:"Sobrenome"}
        variant="outlined"
        defaultValue={selected.sobrenome}
        onChange={(e) => {
          setPessoa({ ...pessoa, sobrenome: e.target.value });
        }}
      />
      <TextField
        id="inIdade"
        label={selected.idade?selected.idade:"Idade"}
        variant="outlined"
        defaultValue={selected.idade}
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
