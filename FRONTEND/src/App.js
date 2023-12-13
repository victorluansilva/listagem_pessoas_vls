import FormPessoa from "./form-entrada-pessoa/form-pessoa";
//Etilos CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./titulo/titulo";
import TablePessoa from "./table-lista-pessoas/table-pessoa";
import { useEffect, useState } from "react";
import {apiGetPessoas, apiAddPessoa} from "./api/pessoa.service";

function App() {
  const [dados, setDados] = useState([{}]);
  const [current, setCurrent] = useState({nome:null,sobrenome:null,idade:null})

  useEffect(() => {
    fetchPessoas();
  }, []);

  const fetchPessoas = async () => {
    const resultado = await apiGetPessoas();
    setDados(resultado);
  };

  const handleAddPessoa = async (novoDado) =>{
    await apiAddPessoa(novoDado)
  }
  

  return (
    <div className="App">
      <FormPessoa pessoa={current} insertPessoa={handleAddPessoa} />
      <TablePessoa pessoas={dados} />
    </div>
  );
}
export default App;
