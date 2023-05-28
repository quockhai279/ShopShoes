'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            ProductType.hasMany(models.Product, { foreignKey: 'productTypeId', as: 'productTypeData' })
            ProductType.belongsTo(models.Category, { foreignKey: 'categoryId', targetKey: 'id', as: 'categoryDataType' })
        }
    };
    ProductType.init({
        valueEn: DataTypes.STRING,
        valueVi: DataTypes.STRING,
        categoryId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ProductType',
    });
    return ProductType;
};