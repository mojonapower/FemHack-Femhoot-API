'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Questions', [{
        question: 'Si un día decidieras sembrar semillas de Quercus robur. ¿Qué crecería?',
        answer1: 'Árbol',
        answer2: 'Flores',
        answer3: 'Verduras',
        answer4: 'Grano',
        solution: 'Árbol',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        question: '¿Los neurólogos creen que la corteza prefrontal del cerebro se activa cuando haces qué?',
        answer1: 'Tienes un ataque de pánico',
        answer2: 'Recuerdas un nombre',
        answer3: 'Entiendes una broma',
        answer4: 'Escuchas música',
        solution: 'Entiendes una broma',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        question: '¿Quién fue el primero en recibir un premio Nobel de Literatura?',
        answer1: 'Novelista',
        answer2: 'Dramaturgo',
        answer3: 'Poeta',
        answer4: 'Ensayista',
        solution: 'Ensayista',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        question: '¿Qué nombre nunca ha adoptado un papa?',
        answer1: 'Valentín',
        answer2: 'Eugenio',
        answer3: 'Gregorio',
        answer4: 'Jorge',
        solution: 'Jorge',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        question: '¿Cuál de estas leyes es falsa en Chile?',
        answer1: 'Prohibido tocar las campanas para incitar al pueblo a sublevarse',
        answer2: 'Prohibido andar en carruaje donde haya una multitud de gente',
        answer3: 'Prohibido poner plantas con maceteros en tus balcones o ventanas',
        answer4: 'Prohibido montar en burros o mulas estando bajo los efectos del alcohol',
        solution: 'Prohibido montar en burros o mulas estando bajo los efectos del alcohol',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
       await queryInterface.bulkDelete('Questions', null, {});
  }
};
