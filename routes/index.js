import express from "express";
import { nameFunction } from "../controllers/index.js";
import {
  getContacts,
  getContact,
  createNewContact,
  updateContactController,
  deleteContactController,
} from "../controllers/contacts.js";

const routes = express.Router();

routes.get("/", nameFunction);
routes.get("/contacts", getContacts);
routes.get("/contacts/:id", getContact);
routes.post("/contacts", createNewContact);
routes.put("/contacts/:id", updateContactController);
routes.delete("/contacts/:id", deleteContactController);

export default routes;
