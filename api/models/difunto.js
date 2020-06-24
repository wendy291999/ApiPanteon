'use strict';
module.exports = (sequelize, DataTypes) => {
  const difunto = sequelize.define('difunto', {
    dniDifunto: DataTypes.STRING,
    nombreDifunto: DataTypes.STRING,
    fechaDeDifuncion: DataTypes.DATE,
    fechaDeEnterramiento: DataTypes.DATE,
    parentesco: DataTypes.STRING,
    edad: DataTypes.STRING,
    estadoCivil: DataTypes.STRING,
    localidad: DataTypes.STRING,
    domicilio: DataTypes.STRING,
    anotaciones: DataTypes.STRING,
    numeroFicha: DataTypes.STRING,
    numerodeHilera: DataTypes.STRING,
    sujetoOrden: DataTypes.STRING
  }, {});
  difunto.associate = function(models) {
    // associations can be defined here
  };
  return difunto;
};