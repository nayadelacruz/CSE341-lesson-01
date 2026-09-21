import express from "express";
import { nameFunction } from "../controllers/index.js";
import { getContacts, getContact } from "../controllers/contacts.js";

const routes = express.Router();

routes.get('/', nameFunction);
routes.use('/allContacts', getContacts);
routes.use('/oneContact/:id', getContact);

export default routes;

