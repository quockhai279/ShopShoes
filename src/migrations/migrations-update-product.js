module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn(
                'Products',
                'brand',
                {
                    type: Sequelize.STRING
                }
            ),
            queryInterface.addColumn(
                'Products',
                'categoryId',
                {
                    type: Sequelize.INTEGER
                }
            ),
            queryInterface.addColumn(
                'Products',
                'productTypeId',
                {
                    type: Sequelize.INTEGER
                }
            ),
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.removeColumn('Products', 'brand'),
            queryInterface.removeColumn('Products', 'categoryId'),
            queryInterface.removeColumn('Products', 'productTypeId')
        ]);
    }
};