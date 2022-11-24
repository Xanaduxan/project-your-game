const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Questions.init({
    themeId: DataTypes.INTEGER,
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};
