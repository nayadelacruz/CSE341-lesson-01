import {
  getAllContacts,
  getOneContact,
  createContact,
  updateContact,
  deleteContact,
} from "../modules/contacts.js";

export async function getContacts(req, res) {
  try {
    const contacts = await getAllContacts();
    res.json(contacts);
  } catch (error) {
    console.error("There was an error retrieving contacts", error);
    res.status(500).json({
      message: "Failed to retrieve contacts",
    });
  }
}

export async function getContact(req, res) {
  const id = req.params.id;

  try {
    const contact = await getOneContact(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    console.error(`There was an error retrieving the contact ${id}`, error);
    res.status(500).json({
      message: "Failed to retrieve contact",
    });
  }
}

export async function createNewContact(req, res) {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newContactId = await createContact(
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    );
    res.status(201).json({
      id: newContactId,
    });
  } catch (error) {
    console.error("There was an error creating new contact", error);
    res.status(500).json({
      message: "Failed to create contact",
    });
  }
}

export async function updateContactController(req, res) {
  const id = req.params.id;

  try {
    const contact = await getOneContact(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    await updateContact(
      id,
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    );

    res.status(204).json("Update Successful");
  } catch (error) {
    console.error(`There was an error updating the contact ${id}`, error);
    res.status(500).json({
      message: "Failed to update contact",
    });
  }
}
//Create a DELETE route to delete a contact. Return an http status code
// representing the successful completion of the request.
export async function deleteContactController(req, res) {
  const id = req.params.id;

  try {
    const contact = await getOneContact(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    await deleteContact(id);
    res.status(200).json(`Contact ${id} has been deleted`);
  } catch (error) {
    console.error(`There was an error deleting the contact ${id}`, error);
    res.status(500).json({
      message: "Failed to delete contact",
    });
  }
}
