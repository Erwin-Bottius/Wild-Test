const { DataTypes, Model } = require('sequelize');

const sequelize = require('../db');

class Member extends Model {}

Member.init(
  {
    name: DataTypes.TEXT,
  },
  {
    sequelize,
    tableName: 'member',
  },
);

module.exports = Member;
