const jwt = require("jsonwebtoken");
const config = require("../../config")

const SECRET_KEY = config.SECRETKEY

const sign = (payload) => jwt.sign(payload, SECRET_KEY);
const verify = (toket) => jwt.verify(toket, SECRET_KEY );

module.exports = {
    sign,
    verify,
}