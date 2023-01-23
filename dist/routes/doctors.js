"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const doctor_1 = __importDefault(require("../models/doctor"));
const router = express_1.default.Router();
// Grab all doctors
router.get('/', async (req, res) => {
    const doctors = await doctor_1.default.getAllDoctors();
    res.send(doctors);
});
exports.default = router;
