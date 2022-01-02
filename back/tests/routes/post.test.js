import { createPost, getPostList } from "../../src/controllers/post.controller";
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
