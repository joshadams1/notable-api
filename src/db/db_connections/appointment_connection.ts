import { Sequelize } from "sequelize";

const sequelize = new Sequelize('appointment.db', 'user', 'password', {
    dialect: 'sqlite',
    host: './src/db/tables/appointment.sqlite'
});

export default sequelize;