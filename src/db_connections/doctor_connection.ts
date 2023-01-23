import { Sequelize } from "sequelize";

const sequelize = new Sequelize('doctor.db', 'user', 'password', {
    dialect: 'sqlite',
    host: './src/db/tables/doctor.sqlite'
});

export default sequelize;