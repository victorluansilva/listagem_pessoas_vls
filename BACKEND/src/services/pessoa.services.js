const Pessoa = require('../models/pessoa')
const pessoaService = {
  getAll: async () => {
    return await Pessoa.findAll();
  },

  findById: async (id) => {
    return await Pessoa.findByPk(id);
  },

  createPessoa: async ({ nome, email }) => {
    const novaPessoa = await Pessoa.create({ nome, email });
    return novaPessoa;
  },

  updatePessoa: async ({ id, nome, sobrenome, email }) => {
    await Pessoa.update(
      { nome, sobrenome, email },
      {
        where: {
          id: id,
        },
      }
    );
    return { id, sobrenome, nome, email };
  },

  deletePessoa: async (id) => {
    await Pessoa.destroy({
      where: { id: id },
    });
  }
}

module.exports = pessoaService;