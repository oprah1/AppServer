"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      name: DataTypes.STRING,
      fristname: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      startDate: DataTypes.DATE,
      update: DataTypes.DATE
    },
    {}
  );
  users.associate = function(models) {
    users.belongsToMany(models.listEvent, { through: "users_listEvent" });
  };
  return users;
};
