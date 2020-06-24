'use strict';
module.exports = (sequelize, DataTypes) => {
  const registro = sequelize.define('registro', {
    nombre: DataTypes.STRING,
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING,
    usuario: DataTypes.STRING,
    contrasena: DataTypes.STRING
  }, {});
  registro.associate = function(models) {
    // associations can be defined here
  };
  return registro;
};