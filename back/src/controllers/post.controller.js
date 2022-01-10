import postTable from "../databases/postTable";
import models from "../models";
import httpStatus from "http-status";
import createError from "http-errors";

const getPostList = async (req, res, next) => {
  let transaction = null;
  try {
    transaction = await models.sequelize.transaction();
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
    next(err);
  }
};

const createPost = async (req, res, next) => {
  let transaction = null;
  try {
    transaction = await models.sequelize.transaction();
    const { title, contents, subject } = req.body;
    if (title === undefined || contents === undefined || subject === undefined)
      throw createError(httpStatus.BAD_REQUEST, "INVALID PARAMETER");

    await postTable.store({ title, contents, subject });
    await transaction.commit();
    return res.status(201).json({ message: "ok" });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};

const getPost = async (req, res, next) => {
  let transaction = null;
  try {
    transaction = await models.sequelize.transaction();
    const { postId } = req.params;
    console.log(postId);
    const postContents = await postTable.getPost(postId);
    if (postContents === null)
      throw createError(httpStatus.BAD_REQUEST, "INVALID POST ID");
    await transaction.commit();
    return res.status(200).json({ message: "ok", result: postContents });
  } catch (err) {
    await transaction.rollback();
    next(err);
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
