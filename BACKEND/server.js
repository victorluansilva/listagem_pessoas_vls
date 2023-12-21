const express = require("express");
const cors = require("cors");
require("dotenv").config();

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true })); 
server.use(cors());

const pessoaRoutes = require("./src/routes/pessoa.routes");

server.use("/api/pessoa", pessoaRoutes);


const PORT = process.env.PORT || 7000;

server.get('/',(req,res)=>{
  res.send(`API DO PROJETO LISTAGEM DE PESSOAS`)
})

server.listen(PORT, () => {
  console.log(process.env)
  console.log(`Seu BACKEND está rodando na porta http://localhost:${PORT}`);
});