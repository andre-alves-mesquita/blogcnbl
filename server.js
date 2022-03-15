const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.SERVER_PORT;
const bodyParser = require("body-parser");
const path = require("path");
const consign = require("consign");
const conexao = require("./infraestrutura/conexao");
const Tabelas = require("./infraestrutura/tabelas");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
consign().include("controllers").into(app);

conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Banco de dados conectado com sucesso");
    Tabelas.init(conexao);
  }
});

app.listen(port, () => {
  console.log(`Sistema rodando na porta: ${port}`);
});
