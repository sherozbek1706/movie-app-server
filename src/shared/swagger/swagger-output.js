export const swaggerFile = {
  swagger: "2.0",
  info: {
    title: "My API",
    description: "Description",
    version: "1.0.0",
  },
  host: "localhost:5000",
  basePath: "/",
  schemes: ["http"],
  paths: {
    "/category": {
      post: {
        description: "",
        responses: {
          201: {
            description: "Created",
          },
        },
      },
      get: {
        description: "",
        responses: {
          200: {
            description: "OK",
          },
        },
      },
    },
    "/category/{id}": {
      delete: {
        description: "",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
        },
      },
      patch: {
        description: "",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
        },
      },
    },
    "/category/un/{id}": {
      delete: {
        description: "",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
        },
      },
    },
  },
};
