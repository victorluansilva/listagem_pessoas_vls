const Pessoa = require("../models/pessoa");

exports.listarPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.json(pessoas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.inserirPessoa = async (req, res) => {
  try {
    const { nome, sobrenome, idade } = req.body;
    const novaPessoa = await Pessoa.create({ nome, sobrenome, idade });
    return res.status(201).json(novaPessoa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.atualizarPessoa = async (req, res) => {
  try {
    console.log(req.params, req.body)
    const { nome, sobrenome, idade } = req.body;
    const editPessoa = await Pessoa.update(
      { nome, sobrenome, idade },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(201).json(editPessoa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletarPessoa = async (req, res) => {
   try {
    await Pessoa.destroy({
      where: { id: req.params.id },
    });
    return res.status(201).json(req.params.id);
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
    return res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.buscarPessoaByIDorSobrenome = async (req, res) => {
  const { id, sobrenome } = req.query; 

  try {
    let people;

    if (id) {
      people = await Pessoa.find({ _id: id }); 
    } else if (sobrenome) {
      people = await Pessoa.find({ sobrenome }); 
    } else {
      people = await Pessoa.find(); 
    }

    if (!people || people.length === 0) {
      return res.status(404).json({ message: 'Nenhuma pessoa encontrada' });
    }

    return res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};