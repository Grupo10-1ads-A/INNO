var empresaModel = require("../models/empresaModel");


function cadastrarEmpresa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeEmpresarial = req.body.nome_empresarialServer;
    var nomeFantasia = req.body.nome_fantasiaServer;
    var cnpj = req.body.cnpjServer;
    var emailEmpresa = req.body.email_empresarialServer

    


    // Faça as validações dos valores
    if (nomeEmpresarial == undefined) {
        res.status(400).send("Seu nome empresarial da empresa está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu email de contato da empresa está undefined!");
    } else {



        // Passe os valores como parâmetro e vá para o arquivo empresaModel.js
        empresaModel.cadastrarEmpresa(nomeEmpresarial, nomeFantasia, cnpj, emailEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da empresa! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrarEndereco(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var numero = req.body.numeroServer
    var complemento = req.body.complementoServer
    var cep = req.body.cepServer
    var logradouro = req.body.logradouroServer
    var bairro = req.body.bairroServer
    var cidade = req.body.cidadeServer
    var estado = req.body.estadoServer
    var cnpj = req.body.cnpjServer;
    var nomeEmpresarial = req.body.nomeEmpresarialServer;

    // Faça as validações dos valores
    if (nomeEmpresarial == undefined) {
        res.status(400).send("Seu nome empresarial da empresa está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu email de contato da empresa está undefined!");
    } else {



        // Passe os valores como parâmetro e vá para o arquivo empresaModel.js
        empresaModel.cadastrarEndereco(numero, complemento, cep, logradouro, bairro, cidade, estado,cnpj,nomeEmpresarial)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro do endereco no controller! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function verificarEmpresa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeEmpresarial = req.body.nome_empresarialServer;
    var nomeFantasia = req.body.nome_fantasiaServer;
    var cnpj = req.body.cnpjServer;
    var emailEmpresa = req.body.email_empresarialServer

    


    // Faça as validações dos valores
    if (nomeEmpresarial == undefined) {
        res.status(400).send("Seu nome empresarial da empresa está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu email de contato da empresa está undefined!");
    } else {



        // Passe os valores como parâmetro e vá para o arquivo empresaModel.js
        empresaModel.verificarEmpresa(nomeEmpresarial, nomeFantasia, cnpj, emailEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da empresa! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    cadastrarEmpresa,
    cadastrarEndereco,
    verificarEmpresa
}

