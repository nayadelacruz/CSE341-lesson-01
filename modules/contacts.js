import { connectToMongoDB } from "../db/mongoDB_connection.js";
import { ObjectId } from "mongodb";

export async function getAllContacts() {
  const db = await connectToMongoDB();
  const contacts = db.collection("Contacts").find({}).toArray();
  return contacts;
}

//Model: Write a function that receives an ID and finds one contact in MongoDB.
export async function getOneContact(id) {
  const db = await connectToMongoDB();

  if (!ObjectId.isValid(id)) {
    return null;
  }
  const contact = await db
    .collection("Contacts")
    .findOne({ _id: new ObjectId(id) });
  return contact;
}

export async function createContact(
  firstName,
  lastName,
  email,
  favoriteColor,
  birthday,
) {
  const db = await connectToMongoDB();

  const newContact = {
    firstName,
    lastName,
    email,
    favoriteColor,
    birthday,
  };
  const result = await db.collection("Contacts").insertOne(newContact);
  return result.insertedId;
}

export async function updateContact(
  id,
  firstName,
  lastName,
  email,
  favoriteColor,
  birthday,
) {
  const db = await connectToMongoDB();

  if (!ObjectId.isValid(id)) {
    return null;
  }

  const updateContact = {
    firstName,
    lastName,
    email,
    favoriteColor,
    birthday,
  };

  const result = await db
    .collection("Contacts")
    .updateOne({ _id: new ObjectId(id) }, { $set: updateContact });
}

export async function deleteContact(id) {
  const db = await connectToMongoDB();
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const result = await db
    .collection("Contacts")
    .deleteOne({ _id: new ObjectId(id) });

  return result;
}
