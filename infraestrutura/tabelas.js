class Tabelas {
  init(conexao) {
    this.conexao = conexao;

    this.criarChat();
  }

  criarChat() {
    const sql = `CREATE TABLE IF NOT EXISTS chat (
        id int NOT NULL AUTO_INCREMENT,
        session varchar(255),
        PRIMARY KEY(id))`;

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela chat criada com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
