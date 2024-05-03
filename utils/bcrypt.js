const bcrypt = require("bcrypt");

const hashPassword = (password) => {
    return bcrypt.hash(password, 10);
};

const comparePassword = (password, password_hash) => {
    return bcrypt.compare(password, password_hash);
};

module.exports = { hashPassword, comparePassword };
