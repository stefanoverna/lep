import API from "./apiFactory";

test("Creates an api instance", () => {
  const api = API({
    url: "",
  });

  expect(api).toEqual(
    expect.objectContaining({
      get: expect.any(Function),
      post: expect.any(Function),
      put: expect.any(Function),
      delete: expect.any(Function),
    })
  );
});
