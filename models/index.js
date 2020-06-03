const env = process.env.NODE_ENV || 'development';
const dbConfig = require("../config/db.config.js")[env];

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    dialectOptions: {
        useUTC: false //for reading from database
    },
    timezone: 'america/new_york', //for writing to database
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.books = require("./books.model.js")(sequelize, Sequelize);
db.authors = require("./authors.model.js")(sequelize, Sequelize);
db.bookAuthors = require("./bookauthors.model.js")(sequelize, Sequelize);
db.carts = require("./carts.model.js")(sequelize, Sequelize);
db.cartBooks = require("./cartbooks.model.js")(sequelize, Sequelize);

module.exports = db;
