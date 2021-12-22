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
