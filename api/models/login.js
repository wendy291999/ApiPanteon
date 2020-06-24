'use strict';
module.exports = (sequelize, DataTypes) => {
  const login = sequelize.define('login', {
    usuario: DataTypes.STRING,
    contrasena: DataTypes.STRING
  }, {});
  login.associate = function(models) {
    // associations can be defined here
  };
  return login;
};