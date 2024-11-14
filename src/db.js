const {Sequelize}=require("sequelize")
const fs = require('fs');
const path = require('path');

require("dotenv").config(); 

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
    DB_DIALECT,
    DB_PORT,
} = process.env;

const dataBase = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: DB_DIALECT,
        port: DB_PORT,
        logging: false
    }
);

/*

    function that goes through the models folder and injects the models into the database
*/

const loadFiles=async()=>{
    const modelsPath =path.join(__dirname, 'models');
    fs.readdirSync(modelsPath).forEach((file) => {
        require(path.join(modelsPath, file))(dataBase)
    });
}

(
    async () => {
        try {
            await loadFiles();
        } catch (error) {
            console.log("Error loading models", error);
        }
    }
)()

module.exports = {
    dataBase,
    ...dataBase.models,
}