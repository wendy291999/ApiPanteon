'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('difuntos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dniDifunto: {
        type: Sequelize.STRING
      },
      nombreDifunto: {
        type: Sequelize.STRING
      },
      fechaDeDifuncion: {
        type: Sequelize.DATE
      },
      fechaDeEnterramiento: {
        type: Sequelize.DATE
      },
      parentesco: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.STRING
      },
      estadoCivil: {
        type: Sequelize.STRING
      },
      localidad: {
        type: Sequelize.STRING
      },
      domicilio: {
        type: Sequelize.STRING
      },
      anotaciones: {
        type: Sequelize.STRING
      },
      numeroFicha: {
        type: Sequelize.STRING
      },
      numerodeHilera: {
        type: Sequelize.STRING
      },
      sujetoOrden: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('difuntos');
  }
};