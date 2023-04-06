'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('shoes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nameShoes: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.DECIMAL
            },
            quantify: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            productCategoryId: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('shoes');
    }
};