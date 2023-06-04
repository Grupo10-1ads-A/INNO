var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/contagem", function (req, res) {
    medidaController.contagem(req, res);
});//CONTAGEM DE SETORS

router.post("/contagem_ENDERECO", function (req, res) {
    medidaController.contagem_ENDERECO(req, res);
});//CONTAGEM DE ENDEREÇOS

router.get("/ultimas_umidades/:idSensor", function (req, res) {
    medidaController.buscarUltimasMedidasUmidades(req, res);
});

router.get("/tempo-real_umidades/:idSensor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealUmidades(req, res);
});

router.get("/ultimas_temperaturas/:idSensor", function (req, res) {
    medidaController.buscarUltimasMedidasTemperaturas(req, res);
});

router.get("/tempo-real_temperaturas/:idSensor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealTemperaturas(req, res);
});

router.get("/ultimas/:idSensor", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idSensor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

module.exports = router;