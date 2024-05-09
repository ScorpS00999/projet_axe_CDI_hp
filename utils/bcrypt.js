import bcrypt from "bcrypt";

export const hashPassword = (password) => {
    return bcrypt.hash(password, 10);
};

export const comparePassword = (password, password_hash) => {
    return bcrypt.compare(password, password_hash);
};

export default { hashPassword, comparePassword };
