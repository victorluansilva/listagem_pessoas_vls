const pessoaService = require("../services/pessoa.services");

const controllerPessoa = {
  listarPessoas: async (req, res) => {
    try {
      const pessoas = await pessoaService.getPessoas();
      res.json(pessoas);
    } catch (error) {
      console.log(error);
      res.status(500).json({ statusCode: 500, error: "Error na tentativa de listar todos os registros no banco" });
    }
  },
  buscarPessoaById: async (req, res) => {
    try {
      const pessoa = await pessoaService.getById(req.params.id);
      if (!pessoa) {
        return res
          .status(404)
          .json({ statusCode: 404, error: "Essa pessoa não existe!" });
      }
      return res.json(pessoa);
    } catch (error) {
      return res
        .statusCode(500)
        .json({ statusCode: 500, error: "Erro busca pelo registro com Id específicado no banco" });
    }
  },
  inserirPessoa: async (req, res) => {
    try {
      const novaPessoa = await pessoaService.createPessoa(req.body);
      return res.status(201).json(novaPessoa);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ statusCode: 500, error: "Erro na tentativa de inserir no registro no banco" });
    }
  },
  atualizarPessoa:async (req, res) => {
    try {
      const pessoaExistente = await pessoaService.getById(req.params.id);
      if (!pessoaExistente) {
        return res
          .status(404)
          .json({ statusCode: 404, error: "Pessoa não encontrada" });
      }
      const pessoaAtualizada = await pessoaService.updatePessoa(req.body);
      return res.json(pessoaAtualizada);
    } catch (error) {
      return res
        .statusCode(500)
        .json({ statusCode: 500, error: "Error na tentativa de atualização do registro" });
    }
  },
  deletarPessoa: async (req, res) => {
    try {
      const pessoaExistente = await pessoaService.getById(req.params.id);
      if (!pessoaExistente) {
        return res
          .status(404)
          .json({ statusCode: 404, error: "Pessoa não encontrada" });
      }
  
      await pessoaService.deletePessoa(req.params.id);
      return res.json({
        statusCode: 200,
        message: `A pessoa com id: ${req.params.id} foi deletada com sucesso!`,
      });
    } catch (error) {
      return res
        .statusCode(500)
        .json({ statusCode: 500, error: "Erro ao tentar deletar o registro" });
    }
  }
}

module.exports = controllerPessoa;

