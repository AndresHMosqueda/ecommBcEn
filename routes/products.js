const express = require('express')
const router = express.Router();

const {sayHi} = require("../controllers/products")

router.get("/", sayHi);

module.exports = router;


