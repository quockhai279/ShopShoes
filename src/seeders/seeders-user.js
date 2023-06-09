'use strict';
// email: DataTypes.STRING,
// password: DataTypes.STRING,
// firstName: DataTypes.STRING,
// lastName: DataTypes.STRING,
// address: DataTypes.STRING,
// phoneNumber: DataTypes.STRING,
// gender: DataTypes.BOOLEAN,
// image: DataTypes.STRING,
// roleId: DataTypes.STRING,
// positionId: DataTypes.STRING
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Quoc Khai',
      lastName: 'Chau',
      phoneNumber: '05648452867',
      address: 'Tay Ninh',
      gender: '1',
      image: '',
      roleId: '',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
