const { Sequelize } = require("sequelize");
const mysqlConfig = require("../config/database");

const sequelize = new Sequelize({
  username: mysqlConfig.MYSQL_USERNAME,
  password: mysqlConfig.MYSQL_PASSWORD,
  database: mysqlConfig.MYSQL_DB_NAME,
  port: 3306,
  dialect: "mysql",
  logging: false,
});

const Referral = require("../models/referral")(sequelize);
const User = require("../models/user")(sequelize);

module.exports = {
  Referral,
  User,
  sequelize,
};
