import postTable from "../databases/postTable";
import models from "../models";

const getPostList = async (req, res, next) => {
  try {
    const transaction = models.sequelize.transaction();
    //TODO
    //const { page, limit, category } = req.query
    const { subject } = req.query
    const condition = {
      isDeleted: false,
    }
    if (subject !== "all") {
      condition.subject = subject
    }
    const postList = await postTable.getPostList(condition);
    transaction.commit();
    return res.status(200);
  } catch (err) {
    transaction.rollback();
  }
};

const createPost = async (req, res, next) => {
  try {
    const transaction = models.sequelize.transaction();
    const { title, contents, writer, subject}
  } catch (err) {}
};

const getPost = async (req, res, next) => {
  try {
  } catch (err) {}
};

const modifyPost = async (req, res, next) => {
  try {
  } catch (err) {}
};

const deletePost = async (req, res, next) => {
  try {
  } catch (err) {}
};

export { getPostList, getPost, createPost, modifyPost, deletePost };
