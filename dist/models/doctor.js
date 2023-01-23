"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const doctor_connection_1 = __importDefault(require("../db_connections/doctor_connection"));
class Doctor extends sequelize_1.Model {
    static async getAllDoctors() {
        return await Doctor.findAll();
    }
    static async getDoctor(id) {
        // Find specific doctor by the primary key of 'id' on the doctor table.
        return await Doctor.findByPk(id);
    }
}
Doctor.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: doctor_connection_1.default,
    modelName: 'doctor',
    // if we need to create an appointment table then we'll add an index to the model and index it on doctorid field
    // indexes: [
    //     {
    //         unique: true,
    //         fields: ['username']
    //     }
    // ]
});
exports.default = Doctor;
