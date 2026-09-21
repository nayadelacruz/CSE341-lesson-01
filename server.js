import express from "express";
import routes from "./routes/index.js";
import { connectToMongoDB } from "./db/mongoDB_connection.js";

const app = express();

const port = process.env.PORT || 3000;

app.use("/", routes);

async function startServer() {
  await connectToMongoDB();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer().catch(console.error);

