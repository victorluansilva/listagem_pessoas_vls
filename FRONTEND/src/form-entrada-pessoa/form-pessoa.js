import React from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import "./form-pessoa.style.css";

const FormPessoa = ({ pessoa, setPessoa }) => {

  return (
    <div id="componentes_form">
      <TextField
        id="inNome"
        label="Nome"
        variant="outlined"
        onChange={(e) => {
          setPessoa({ ...pessoa, nome: e.target.value });
        }}
      />
      <TextField
        id="inSobrenome"
        label="Sobrenome"
        variant="outlined"
        onChange={(e) => {
          setPessoa({ ...pessoa, sobrenome: e.target.value });
        }}
      />
      <TextField
        id="inIdade"
        label="Idade"
        variant="outlined"
        onChange={(e) => {
          setPessoa({ ...pessoa, idade: e.target.value });
        }}
      />

      <Button type="submit" variant="outlined" onClick={console.log(pessoa)}>
        Botão
      </Button>
    </div>
  );
};

export default FormPessoa;
