'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class productType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // productType.hasMany(models.User, { foreignKey: 'positionId', as: 'positionData' })
            // productType.hasMany(models.User, { foreignKey: 'gender', as: 'genderData' })
        }
    };
    productType.init({
        keyMap: DataTypes.STRING,
        type: DataTypes.STRING,
        categoryId: DataTypes.STRING,
        valueEn: DataTypes.STRING,
        valueVi: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ProductType',
    });
    return productType;
};