var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var nomeFantasia = req.body.nomeFantasiaServer;
    var nomeEmpresa = req.body.nomeEmpresaServer;
    var cnpj = req.body.cnpjServer;
    var email = req.body.emailServer;
    var email_empresa = req.body.email_empresaServer;
    var cep = req.body.cepServer;
    var rua = req.body.ruaServer;
    var bairro = req.body.bairroServer;
    var cidade = req.body.cidadeServer;
    var estado = req.body.estadoServer;
    var telefone = req.body.telefoneServer;
    var logradouro = req.body.logradouroServer;
    var cpf = req.body.cpfServer;
    var numero = req.body.numeroServer;
    var senha = req.body.senhaServer;
    


    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (nomeFantasia == undefined) {
        res.status(400).send("Sua nomeF está undefined!");
    } else if(cep == undefined){
        res.status(400).send("seu cep está undefined!");
    }else if(rua == undefined){
        res.status(400).send("Sua rua esta undefined!")
    }else if (bairro == undefined){
        res.status(400).send("Seu bairro está undefined!")
    }else if (cidade == undefined){
        res.status(400).send("Sua cidade está undefined!")
    }else if (estado == undefined){
        res.status(400).send("Seu estado está undefined!")
    }else if (telefone == undefined){
        res.status(400).send("Seu telefone está undefined!")
    }else if (logradouro == undefined){
        res.status(400).send("Seu logradouro está undefined!")
    }else if (numero == undefined){
        res.status(400).send("Seu numero está undefined!")
    }else if (email_empresa == undefined){
        res.status(400).send("Seu email empresarial está undefined!")
    }else if (nomeEmpresa == undefined){
        res.status(400).send("Seu nome empresarial está undefined!")
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, cpf, senha, nomeFantasia, cep, rua, bairro, cidade, estado, telefone, logradouro, numero, email_empresa, nomeEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar
}