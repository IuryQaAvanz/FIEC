describe(" Validação de dados de api", () => {
  it("Valida os dados no objeto JSON", function() {
    cy.api({
      method: "GET",
      url: "/curso?page=1",
    }).should((response) =>  {
      const data = response.body.data;
      console.log(body.data)

    //   expect(data[0].idcurso).to.equal(4814);
    //   expect(data[0].curso).to.equal("TECNICO EM MECATRÔNICA.");
    //   expect(data[0].area).to.equal("Automação e Mecatrônica");
    //   expect(data[0].dt_inicio_curso).to.equal("2022-09-01 03:00:00");
    //   expect(data[0].dt_termino_curso).to.equal("2023-12-27 03:00:00");
    //   expect(data[0].cidade).to.equal("Fortaleza");
    //   expect(data[0].id_unidade_executora).to.equal(20);
    //   expect(data[0].unidade_id).to.equal(20);
    //   expect(data[0].qtd_parcelas).to.equal(18);
    //   expect(data[0].valor_total).to.equal(5400);
    //   expect(data[0].valor_curso).to.equal(18000);
    //   expect(data[0].evento).to.equal(26571);
    //   expect(data[0].ead).to.equal("N");
    //   expect(data[0].gratuito).to.equal("N");
    //   expect(data[0].h_inicio).to.equal("08:00");
    //   expect(data[0].h_fim).to.equal("12:00");
    //   expect(data[0].modalidade).to.equal("HABILITAÇÃO TÉCNICA - Educ. Prof. Técnica de Nível Médio");
    //   expect(data[0].dt_inicio_mat).to.be.null;
    //   expect(data[0].dt_termino_mat).to.be.null;
    //   expect(data[0].id_modalidade).to.equal(1);
    //   expect(data[0].modalidade_amigavel).to.equal("Técnicos");
    //   expect(data[0].unidade_nome_comercial).to.equal("SENAI Jacarecanga");
    //   expect(data[0].id_loja).to.be.null;
    //   expect(data[0].exibe_loja).to.equal("N");
    //   expect(data[0].dias_semana).to.be.null;
    //   expect(data[0].curso_novo).to.equal("S");
    //   expect(data[0].turno).to.equal("Manhã");
    //   expect(data[0].curso_ferias).to.equal("N");
    //   expect(data[0].aplica_cupom_black_week).to.equal("N");
    //   expect(data[0].valor_cupom_black_week).to.be.null;
    });
  });
});
