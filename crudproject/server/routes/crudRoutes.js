var exp= require("express");

var router= exp.Router();

var crudController= require("../api/controller");

router.post("/addProduct", crudController.addProduct)

module.exports = router;