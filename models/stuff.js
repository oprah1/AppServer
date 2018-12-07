'use strict';
module.exports = (sequelize, DataTypes) => {
  const stuff = sequelize.define('stuff', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    startDate: DataTypes.DATE,
    update: DataTypes.DATE
  }, {});
  stuff.associate = function(models) {
    // associations can be defined here
  };
  return stuff;
};