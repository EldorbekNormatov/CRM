require("dotenv/config");
const { env } = process;

const config = {
    PORT: env.PORT,
    SECRETKEY: env.SECRETKEY,
};

module.exports = config 