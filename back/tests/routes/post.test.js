import {
  createPost,
  getPost,
  getPostList,
} from "../../src/controllers/post.controller";
import postTable from "../../src/databases/postTable";
import models from "../../src/models";
models.sequelize.transaction = jest.fn(() =>
  Promise.resolve({
    rollback: () => Promise.resolve(),
    commit: () => Promise.resolve(),
  })
);

describe("GET all post", () => {
  const res = {
    status: jest.fn(() => res),
    json: jest.fn((data) => data),
  };
  const next = jest.fn();
  test("it should return 200 with all post", async () => {
    postTable.getPostList = jest.fn(() => 1);
    const req = { query: { subject: "1" } };
    const response = await getPostList(req, res, next);
    console.log(response);
    expect(res.status).toBeCalledWith(200);
    expect(response.result).toBe(1);
  });
});

describe("create post", () => {
  const res = {
    status: jest.fn(() => res),
    json: jest.fn(),
  };
  const next = jest.fn();
  test("it should return 200", async () => {
    postTable.store = jest.fn();
    const req = {
      body: {
        title: "test",
        contents: "<p>안녕하세요</p><p>ㅎㅇㅎㅇ</p>",
        writer: "admin",
        subject: "1",
      },
    };
    const response = await createPost(req, res, next);
    expect(res.status).toBeCalledWith(201);
  });

  test("it should return 400", async () => {
    postTable.store = jest.fn();
    const req = {
      body: {
        title: "title",
      },
    };
    await createPost(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});

describe("get post contents", () => {
  const res = {
    status: jest.fn(() => res),
    json: jest.fn((data) => data),
  };
  const next = jest.fn();
  postTable.getPost = jest.fn((id) => {
    if (id === 1)
      return {
        title: "test",
        contents: "<p>안녕하세요</p>",
        writer: "admin",
        subject: "1",
      };
    return null;
  });
  test("it should return 200 with specific post", async () => {
    const req = { params: { postId: 1 } };
    const response = await getPost(req, res, next);
    console.log(response);
    expect(res.status).toBeCalledWith(200);
    expect(response.result).toEqual({
      title: "test",
      contents: "<p>안녕하세요</p>",
      writer: "admin",
      subject: "1",
    });
  });
  test("it should return 400 if parameter is invalid", async () => {
    const req = { params: { postId: 2 } };
    const response = await getPost(req, res, next);
    //todo identify http status code
    expect(next).toHaveBeenCalled();
  });
});
