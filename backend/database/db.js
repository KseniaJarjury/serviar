import { Sequelize } from "sequelize";


const db = new Sequelize ('serviar', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
});

export default db