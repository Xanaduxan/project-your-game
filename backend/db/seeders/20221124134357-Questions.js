/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Questions', [{
      themeId: 1,
      question: 'Как пройти в библиотеку?',
      answer: 'Оля - молодец!',
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      themeId: 1,
      question: 'Как пройти в библиотеку?',
      answer: 'Оля - молодец!',
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      themeId: 1,
      question: 'Как пройти в библиотеку?',
      answer: 'Оля - молодец!',
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      themeId: 1,
      question: 'Как пройти в библиотеку?',
      answer: 'Оля - молодец!',
      price: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      themeId: 1,
      question: 'Как пройти в библиотеку?',
      answer: 'Оля - молодец!',
      price: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      themeId: 2,
      question: 'Готов к экзамену?',
      answer: 'Ну такое',
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      themeId: 2,
      question: 'Готов к экзамену?',
      answer: 'Ну такое',
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      themeId: 2,
      question: 'Готов к экзамену?',
      answer: 'Ну такое',
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      themeId: 2,
      question: 'Готов к экзамену?',
      answer: 'Ну такое',
      price: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      themeId: 2,
      question: 'Готов к экзамену?',
      answer: 'Ну такое',
      price: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      themeId: 3,
      question: 'Ваня пошутил норм?',
      answer: 'Как обычно!',
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      themeId: 3,
      question: 'Ваня пошутил норм?',
      answer: 'Как обычно!',
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      themeId: 3,
      question: 'Ваня пошутил норм?',
      answer: 'Как обычно!',
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      themeId: 3,
      question: 'Ваня пошутил норм?',
      answer: 'Как обычно!',
      price: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      themeId: 3,
      question: 'Ваня пошутил норм?',
      answer: 'Как обычно!',
      price: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
