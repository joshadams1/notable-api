"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('doctor.db', 'user', 'password', {
    dialect: 'sqlite',
    host: './src/db/tables/doctor.sqlite'
});
exports.default = sequelize;
