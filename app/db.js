const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  define: {
    timestamps: false,
  },
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
  },
});

module.exports = sequelize;
