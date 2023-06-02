3
var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fkSensor = ${idSensor}
                    order by id desc`;
    } 
    
    else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
            ds.temperatura, 
            ds.umidade, 
            ds.dataHora as momento, 
            DATE_FORMAT(ds.dataHora,'%H:%i:%s') as momento_grafico 
        from 
            dadosSensor as ds 
        where ds.fkSensor = ${idSensor} 
        order by ds.dataHora desc 
        limit ${limite_linhas}`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fkSensor 
                        from medida where fkSensor = ${idSensor} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

                    instrucaoSql = `select 
            ds.temperatura, 
            ds.umidade, 
            DATE_FORMAT(ds.dataHora,'%H:%i:%s') as momento_grafico,
            fkSensor
        from 
            dadosSensor ds 
        where ds.fkSensor = ${idSensor} 
        order by ds.dataHora desc 
        limit 1`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscar(idSensor){
 console.log("ACESSEI A MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmpresa():", idSensor);
        

}

function contagem (idEmpresa){  /* SOBRE SETORES*/  
console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idEmpresa)
var instrucao = `
SELECT setor.idsetor from setor 
join endereco on setor.fkEndereco = idEndereco
join empresa on endereco.fkEmpresa = empresa.idEmpresa
WHERE idEmpresa = ${idEmpresa};
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    contagem
}
