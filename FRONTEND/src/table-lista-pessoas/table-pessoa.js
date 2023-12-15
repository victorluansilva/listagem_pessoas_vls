const TablePessoa = ({ pessoas, handleEdit }) => {
  return (
    <div className="m-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Sobrenome</th>
            <th scope="col">Idade</th>
          </tr>
        </thead>
        <tbody>
          {pessoas.map((pessoa, index) => (
            <tr key={index} onClick={(e) =>{handleEdit(e, index, pessoa)}}
            onContextMenu={(e) =>{handleEdit(e, index, pessoa)}} >
              <th scope="row">
                {index+1}
              </th>
              <td>{pessoa.nome}</td>
              <td>{pessoa.sobrenome}</td>
              <td>{pessoa.idade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePessoa;
