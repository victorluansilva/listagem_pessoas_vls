const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const server = express();
server.use(cors());
server.use(express.json());

const pessoaRoutes = require("./src/routes/pessoaRoutes");

server.use("/api/pessoa", pessoaRoutes);
// server.use("/api/record", recordRoutes);

const PORT = process.env.PORT | 7000;

server.get('/',(req,res)=>{
  res.send(`API DO PROJETO LISTAGEM DE PESSOAS`)
})

server.listen(PORT, () => {
  console.log(`Seu BACKEND está rodando na porta http://localhost:${PORT}`);
});