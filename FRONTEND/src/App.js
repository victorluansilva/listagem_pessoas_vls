import FormPessoa from "./form-entrada-pessoa/form-pessoa";
//Etilos CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./titulo/titulo";
import TablePessoa from "./table-lista-pessoas/table-pessoa";
import { useEffect, useState } from "react";
import getPessoas from "./api/pessoa.service";

function App() {
  const [dados, setDados] = useState([{}]);
  const [pessoa, setPessoa] = useState({
    nome: "",
    sobrenome: "",
    idade: 0,
  });

  useEffect(() => {
    fetchPessoas();
  }, []);

  const fetchPessoas = async () => {
    const resultado = await getPessoas();
    setDados(resultado);
  };

  

  return (
    <div className="App">
      <FormPessoa pessoa={pessoa} setPessoa={setPessoa} />
      <TablePessoa pessoas={dados} />
    </div>
  );
}
export default App;
