const Pessoa = require("../models/pessoa");

exports.listarPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.json(pessoas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.inserirPessoa = async (req, res) => {
  try {
    const { nome, sobrenome, idade } = req.body;
    const novaPessoa = await Pessoa.create({ nome, sobrenome, idade });
    res.status(201).json(novaPessoa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.atualizarPessoa = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Pessoa.update(
      { title: 'a very different title now' },
      { where: { _id: 1 } }
    )
    handleResult(result)
  } catch (err) {
    handleError(err)
  }
};

exports.deletarPessoa = async (req, res) => {
  const { id } = req.params;

  try {
    const pessoaADeletar = await Pessoa.findOneAndDelete({ _id: id });

    if (!pessoaADeletar) {
      return res.status(404).json({ message: 'Pessoa não encontrada' });
    }

    res.status(200).json({ message: 'Pessoa excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.buscarPessoaById = async (req, res) => {
  const { id } = req.params;

  try {
    const pessoa = await Pessoa.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({ message: 'Pessoa não encontrada' });
    }
    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.buscarPessoaByIDorSobrenome = async (req, res) => {
  const { id, sobrenome } = req.query; // Captura os parâmetros de busca (query params)

  try {
    let people;

    if (id) {
      people = await Pessoa.find({ _id: id }); // Busca por ID
    } else if (sobrenome) {
      people = await Pessoa.find({ sobrenome }); // Busca por sobrenome
    } else {
      people = await Pessoa.find(); // Busca todas as pessoas caso nenhum parâmetro seja fornecido
    }

    if (!people || people.length === 0) {
      return res.status(404).json({ message: 'Nenhuma pessoa encontrada' });
    }

    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};