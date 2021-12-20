module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "Comment",
    {
      writer: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
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
      is_deleted: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      parent: {
        allowNull: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
    },
    {
      tableName: "comment",
      timestamps: true,
    }
  );

  comment.beforeSave(async (user, options) => {
    if (comment.changed("password")) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(comment.password, salt);
    }
  });

  comment.associate = function (models) {};

  return comment;
};
