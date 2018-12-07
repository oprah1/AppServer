'use strict';
module.exports = (sequelize, DataTypes) => {
  const listEvent = sequelize.define('listEvent', {
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    startDate: DataTypes.DATE,
    update: DataTypes.DATE
  }, {});
  listEvent.associate = function(models) {
    listEvent.belongsToMany(models.stuff,{through:"listEvent_stuff"});

  };
  return listEvent;
};