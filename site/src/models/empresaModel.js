var database = require("../database/config")

function cadastrarEmpresa(nomeEmpresarial,nomeFantasia,cnpj,emailEmpresa) {
    console.log("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmpresa():", nomeEmpresarial,nomeFantasia,cnpj,emailEmpresa);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO empresa (nome, nomeFantasia, cnpj, emailContato) VALUES ('${nomeEmpresarial}','${nomeFantasia}','${cnpj}','${emailEmpresa}');
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function cadastrarEndereco(numero,complemento,cep,logradouro,bairro,cidade,estado,cnpj,nomeEmpresarial) {
    console.log("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEndereco():", numero,complemento,cep,logradouro,bairro,cidade,estado,cnpj,nomeEmpresarial);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO endereco (numero,complemento,cep,logradouro,bairro,cidade,estado,fkEmpresa) VALUES ('${numero}','${complemento}','${cep}','${logradouro}','${bairro}','${cidade}','${estado}',(SELECT idEmpresa from empresa where cnpj = '${cnpj}' AND nome ='${nomeEmpresarial}'));
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

















module.exports = {
    cadastrarEmpresa,
    cadastrarEndereco
    
};