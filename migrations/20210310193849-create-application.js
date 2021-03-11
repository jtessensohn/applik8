'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.STRING,
        allowNull: false
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false
      },
      appDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      followUpDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      salary: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      notes: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Applications');
  }
};