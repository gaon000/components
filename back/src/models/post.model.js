module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "Post",
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      subject: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      hits: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      isDeleted: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "post",
      timestamps: true,
    }
  );
  post.beforeSave(async (user, options) => {});

  post.associate = function (models) {};

  return post;
};
