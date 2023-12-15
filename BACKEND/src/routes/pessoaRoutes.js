const express = require("express");
const router = express.Router();
const pessoaController = require("../controllers/pessoaController");

router.get('/',pessoaController.listarPessoas);
router.get('/:id',pessoaController.buscarPessoaById);
router.get('/busca',pessoaController.buscarPessoaByIDorSobrenome);
router.post('/add',pessoaController.inserirPessoa)
router.put('/:id',pessoaController.atualizarPessoa)
router.delete('/:id',pessoaController.deletarPessoa)

module.exports = router;