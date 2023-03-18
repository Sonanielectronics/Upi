const HTTP = require("../../constant/response.constant");
const fs = require("fs");

const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.get("/", class1.a);

router.get("/Add2", class1.b);
router.post("/Add2", class1.c);
router.get("/Upi", class1.d);

module.exports = router;
