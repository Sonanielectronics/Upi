const HTTP = require("../../constant/response.constant");
const fs = require("fs");

const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.get("/Add", class1.a);
router.post("/Add", class1.b);
router.get("/Get", class1.c);

module.exports = router;
