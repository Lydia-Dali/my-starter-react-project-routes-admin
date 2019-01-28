'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MediaTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mediaId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
        references: {
          model: "Medias",
          key: 'id',
        }
      },
      tagId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
        references: {
          model: "Tags",
          key: 'id',
        }
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
    return queryInterface.dropTable('MediaTags');
  }
};