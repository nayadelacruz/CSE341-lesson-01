import swaggerAutogen from "swagger-autogen";

const swagger = swaggerAutogen();

const doc = {
  info: {
    title: "Contacts API",
    description: "Contacts API documentation",
  },

  host: "cse341-lesson-01.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";

const routes = ["./routes/index.js"];

swagger(outputFile, routes, doc);
