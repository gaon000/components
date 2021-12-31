import postTable from "../databases/postTable";
import models from "../models";

const getPostList = async (req, res, next) => {
  let transaction = null;
  try {
    transaction = models.sequelize.transaction();
    //TODO
    //const { page, limit, category } = req.query
    const { subject } = req.query;
    const condition = {
      isDeleted: false,
    };
    if (subject !== "all") {
      condition.subject = subject;
    }
    const postList = await postTable.getPostList(condition);
    await transaction.commit();
    return res.status(200).json({ message: "ok", result: postList });
  } catch (err) {
    await transaction.rollback();
    return res.status(500).json({ message: "bad" });
  }
};

const createPost = async (req, res, next) => {
  let transaction = null;
  try {
    transaction = models.sequelize.transaction();
    const { title, contents, writer, subject } = req.body;
    await postTable.store({ title, contents, writer, subject });
    await transaction.commit();
    return res.status(200).json({ message: "ok" });
  } catch (err) {
    await transaction.rollback();
    return res.status(500).json({ message: "bad" });
  }
};

const getPost = async (req, res, next) => {
  let transaction = null;
  try {
    transaction = models.sequelize.transaction();
    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
  }
};

const modifyPost = async (req, res, next) => {
  let transaction = null;
  try {
    transaction = models.sequelize.transaction();
    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
  }
};

const deletePost = async (req, res, next) => {
  let transaction = null;
  try {
    transaction = models.sequelize.transaction();
    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
  }
};

export { getPostList, getPost, createPost, modifyPost, deletePost };
