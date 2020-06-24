'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sepulturas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dniSepultura: {
        type: Sequelize.STRING
      },
      numeroSepultura: {
        type: Sequelize.STRING
      },
      numeroAntiguo: {
        type: Sequelize.STRING
      },
      campoSanto: {
        type: Sequelize.STRING
      },
      ultimoDifunto: {
        type: Sequelize.STRING
      },
      fechaDifuncion: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.STRING
      },
      parentescoTitular: {
        type: Sequelize.STRING
      },
      capacidad: {
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
    return queryInterface.dropTable('sepulturas');
  }
};