
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Orders', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    order_number: {
      type: Sequelize.INTEGER,
    },
    first_order: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    created: {
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Orders'),
};
