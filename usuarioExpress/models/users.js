const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    user: {
      type: DataTypes.STRING(20),
      primaryKey: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    why: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    tipo: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false
  });
};

