import { getPostList } from "../../src/controllers/post.controller";

beforeAll(async () => {});

describe("GET all post", () => {
  const res = {
    status: jest.fn(() => res),
    json: jest.fn(),
  };
  const next = jest.fn();
  test("it should return 200 with all post", async () => {
    const req = {};
    getPostList(req, res, next);
    expect(res.status).toBeCalledWith(200);
  });
});
