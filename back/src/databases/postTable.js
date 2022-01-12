import models from "../models";
const Op = models.Sequelize.Op;

export default class postTable {
  async store(data) {
    return await models.Post.create(data);
  }

  async getPostList(condition) {
    // to do pagination
    try {
      return await models.Post.findAll({
        where: condition,
        attributes: ["title", "createdAt", "subject", "hits"],
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async getPost(id) {
    try {
      return await models.Post.findOne({
        where: {
          id,
          isDeleted: false,
        },
        attributes: [
          "id",
          "createdAt",
          "updatedAt",
          "hits",
          "contents",
          "title",
          "subject",
        ],
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async modifyPost(id, data) {
    try {
      return await models.Post.update(
        { data },
        {
          where: {
            id,
          },
        }
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  async deletePost(id) {
    try {
      return await models.Post.update(
        { isDeleted: true },
        {
          where: {
            id,
          },
        }
      );
    } catch (e) {
      throw new Error(e);
    }
  }
}
