// db/connection.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function connectToMongoDB() {
  if (!client.topology) {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  }
  return client.db("CSE341");
}

export default client;
