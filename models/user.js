"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "ユーザーID(アイディ)は　かならずいれてね。",
          },
          isAlphanumeric: { msg: "アルファベット　と　すうじ　だけを　つかって　いれてね。" },
        },
      },
      pass: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "パスワードは　かならずいれてね。",
          },
          isAlphanumeric: { msg: "アルファベット　と　すうじ　だけを　つかって　いれてね。" },
        },
      },
      level: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
          min: 0,
        },
      },
      exp: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
          min: 0,
        },
      },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
