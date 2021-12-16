const { Router } = require("express");
const apiData = require("../controllers/apiData");
const validateCredentials = require("../controllers/validations");

const router = Router();

router
    .post("/credentials", validateCredentials)
    .get("/api", apiData);

module.exports = router;
