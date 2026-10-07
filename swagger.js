import swaggerAutogen from "swagger-autogen";

const swagger = swaggerAutogen();

const doc = {
  info: {
    title: "Contacts API",
    description: "Contacts API documentation",
  },
};

const outputFile = "./swagger.json";

const routes = ["./routes/index.js"];

swagger(outputFile, routes, doc);
