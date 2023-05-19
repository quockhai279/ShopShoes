'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Clinic extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    };
    Clinic.init({
        address: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.BLOB
    }, {
        sequelize,
        modelName: 'Clinic',
    });
    return Clinic;
};