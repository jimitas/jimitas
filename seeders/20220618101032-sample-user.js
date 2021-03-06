'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_data', [
      {
        name: 'Taro',
        pass: 'yamada',
        level:0,
        point:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hanako',
        pass: 'flower',
        level:0,
        point:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jiro',
        pass: 'change',
        level:0,
        point:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sachiko',
        pass: 'happy',
        level:0,
        point:0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_data', null, {});
  }
};
