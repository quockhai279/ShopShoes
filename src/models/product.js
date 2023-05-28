'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Product.belongsTo(models.Category, { foreignKey: 'categoryId', targetKey: 'id', as: 'categoryData' })
            Product.belongsTo(models.ProductType, { foreignKey: 'productTypeId', targetKey: 'id', as: 'productTypeData' })
        }
    };
    Product.init({
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        quantity: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.BLOB,
        brand: DataTypes.STRING,
        categoryId: DataTypes.INTEGER,
        productTypeId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};