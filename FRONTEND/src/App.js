//Imports de Componentes
// import Titulo from "./titulo/titulo";
import FormPessoa from "./form-entrada-pessoa/form-pessoa";
import TablePessoa from "./table-lista-pessoas/table-pessoa";
//Etilos CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Outros imports
import { useEffect, useState } from "react";
import {
  apiGetPessoas,
  apiAddPessoa,
  apiUpdatePessoa,
  apiDeletePessoa,
} from "./api/pessoa.service";

function App() {
  const [dados, setDados] = useState([{}]);
  const [onAction, setAction] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const fetchPessoas = async () => {
      const resultado = await apiGetPessoas();
      setDados(resultado);
      setAction(false);
      setSelected({});
    };
    fetchPessoas();
  }, [onAction]);

  const handleSubmit = async (novoDado) => {
    try {
      const existingPerson = dados.find((e) => e.id === novoDado.id);
      let result;
      if (existingPerson) {
        result = await apiUpdatePessoa(novoDado.id, novoDado);
      } else {
        result = await apiAddPessoa(novoDado);
      }
      window.alert(
        `${
          existingPerson
            ? novoDado.nome.toUpperCase() + " foi atualizado"
            : novoDado.nome.toUpperCase() + " foi adicionado"
        }`
      );
      if (result) {
        setAction(!onAction);
        return result;
      }
    } catch (error) {
      console.error("Erro na requisção:");
      throw new Error(error.message);
    }
  };

  const handleClick = async (e, index, pessoa) => {
    console.log(e, index, pessoa);
    if (e.type === "click") {
      const confirmarEdicao = window.confirm(
        `Clicou com o botão esquerdo, e o ${pessoa.nome?.toUpperCase()} será carregado para edição`
      );
      if (confirmarEdicao) {
        setSelected(pessoa);
      }
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      if (e.button === 2) {
        const confirmarDelecao = window.confirm(
          `Clicou com o botão direito, e o ${pessoa.nome?.toUpperCase()} será deletado`
        );
        if (confirmarDelecao) {
          await apiDeletePessoa(index);
        }
      }
    }
  };

  return (
    <div className="App">
      <FormPessoa
        onSelected={selected}
        setSelected={setSelected}
        handleSubmit={handleSubmit}
      />
      <TablePessoa pessoas={dados} handleEdit={handleClick} />
    </div>
  );
}
export default App;
