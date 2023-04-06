'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Shoes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Shoes.init({
        nameShoes: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        quantify: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.TEXT,
        productCategoryId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Shoes',
    });
    return Shoes;
};