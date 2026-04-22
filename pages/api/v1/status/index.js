function status(req, res) {
  res.status(200).json({
    chave: "os alunos do curso de desenvolvimento são acima da média",
  });
}

export default status;
