module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "Post",
    {
      writer: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      subject: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      hits: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "post",
      timestamps: true,
    }
  );
  User.beforeSave(async (user, options) => {});

  User.associate = function (models) {};

  return post;
};
