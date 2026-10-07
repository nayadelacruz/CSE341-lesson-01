import express from "express";
import routes from "./routes/index.js";
import { connectToMongoDB } from "./db/mongoDB_connection.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" with { type: "json" };

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

async function startServer() {
  await connectToMongoDB();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer().catch(console.error);
