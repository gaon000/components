module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "Comment",
    {
      writer: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      comment: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      order: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      post_id: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      ip: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      is_anonymous: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "post",
      timestamps: true,
    }
  );
  User.beforeSave(async (user, options) => {});

  User.associate = function (models) {};

  return comment;
};
