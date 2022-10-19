const { DataTypes } = require("sequelize");
const User = (sequelize) => {
  return sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

//const

module.exports = User;
