const request = require("supertest");
const { createDevServer } = require("@wirelineio/cli/dist/es/lib/dev_server");

let server;

beforeAll(async () => {
  server = await createDevServer();
});

test("GET /test", done =>
  request(server)
    .get("/test")
    .expect(200)
    .expect(response =>
      expect(response.body).toMatchObject({ message: "Hello, Wireline!" })
    )
    .end(err => done(err)));

test("GET /test?name=Bob", done =>
  request(server)
    .get("/test?name=Bob")
    .expect(200)
    .expect(response =>
      expect(response.body).toMatchObject({ message: "Hello, Bob!" })
    )
    .end(err => done(err)));
