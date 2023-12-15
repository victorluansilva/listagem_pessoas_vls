//Imports de Componentes
// import Titulo from "./titulo/titulo";
import FormPessoa from "./form-entrada-pessoa/form-pessoa";
import TablePessoa from "./table-lista-pessoas/table-pessoa";
//Etilos CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Outros imports
import { useEffect, useState } from "react";
import { apiGetPessoas, apiAddPessoa, apiGetPessoaById, apiUpdatePessoa, apiDeletePessoa } from "./api/pessoa.service";

function App() {
  const [dados, setDados] = useState([{}]);
  const [onAction, setAction] = useState(false);
  const [selected, setSelected] = useState({ id: null, nome: null, sobrenome: null, idade: null })

  useEffect(() => {
    fetchPessoas();
  }, [onAction]);

  const fetchPessoas = async () => {
    const resultado = await apiGetPessoas();
    setDados(resultado);
    setAction(false)
  };

  const handleSubmit = async (novoDado) => {
    try {
      const existingPerson = await apiGetPessoaById(novoDado.id);
      if (existingPerson) {
        await apiUpdatePessoa(novoDado.id, novoDado);
        console.log('Pessoa atualizada com sucesso!');
      } else {
        await apiAddPessoa(novoDado);
        console.log('Pessoa adicionada com sucesso!');
      }
      setAction(!onAction);
    } catch (error) {
      console.error('Erro ao adicionar ou atualizar pessoa:', error);
    }
  }

  const handleClick = async (e, index, pessoa) => {
    console.log(e, index, pessoa)
    if (e.type === "click") {
      const confirmarEdicao = window.confirm(
        `Clicou com o botão esquerdo, e o ${pessoa.nome.toUpperCase()} será carregado para edição`
      );
      if (confirmarEdicao) {
        setSelected(pessoa);
      }
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      if (e.button === 2) {
        const confirmarDelecao = window.confirm(
          `Clicou com o botão direito, e o ${pessoa.nome.toUpperCase()} será deletado`
        );
        if (confirmarDelecao) {
          await apiDeletePessoa(index);
        }

      }
    }
  }

  return (
    <div className="App">
      <FormPessoa selected={selected} handleSubmit={handleSubmit} />
      <TablePessoa pessoas={dados} handleEdit={handleClick} />
    </div>
  );
}
export default App;
