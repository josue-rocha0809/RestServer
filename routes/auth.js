const { Router } = require("express");
const {check} = require("express-validator")

const {login} = require('../controllers/auth')

const router= Router();

router.post('/login',[check('correo is required').isEmail()],login)

module.exports = router;
