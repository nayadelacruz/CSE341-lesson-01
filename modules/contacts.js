import { connectToMongoDB } from "../db/mongoDB_connection.js"; 
import { ObjectId } from "mongodb";

export async function getAllContacts() {
    const db = await connectToMongoDB();
    const contacts = db.collection("Contacts").find({}).toArray();
    return contacts;
}

//Model: Write a function that receives an ID and finds one contact in MongoDB.
export async function getOneContact(id){
    const db = await connectToMongoDB();

    if (!ObjectId.isValid(id)) {
        return null;}
    const contact = await db.collection("Contacts").findOne({_id: new ObjectId(id)});
    return contact;
}