'use strict';
module.exports = (sequelize, DataTypes) => {
  const sepultura = sequelize.define('sepultura', {
    dniSepultura: DataTypes.STRING,
    numeroSepultura: DataTypes.STRING,
    numeroAntiguo: DataTypes.STRING,
    campoSanto: DataTypes.STRING,
    ultimoDifunto: DataTypes.STRING,
    fechaDifuncion: DataTypes.DATE,
    estado: DataTypes.STRING,
    parentescoTitular: DataTypes.STRING,
    capacidad: DataTypes.STRING
  }, {});
  sepultura.associate = function(models) {
    // associations can be defined here
  };
  return sepultura;
};