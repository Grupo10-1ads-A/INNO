var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.post("/cadastrarEmpresa", function (req, res) {
    empresaController.cadastrarEmpresa(req, res);
})
router.post("/verificarEmpresa", function (req, res) {
    empresaController.verificarEmpresa(req, res);
})
router.post("/cadastrarEndereco", function (req, res) {
    empresaController.cadastrarEndereco(req, res);
})


module.exports = router;