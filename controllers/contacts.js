import { getAllContacts, getOneContact } from "../modules/contacts.js";

export async function getContacts(req, res) {
    try{
        const contacts = await getAllContacts();
        res.json(contacts);
    } catch (error){
        console.error("There was an error retrieving contacts", error);
        res.status(500).json({
            message: "Failed to retrieve contacts"
        });
    }
}

export async function getContact(req, res) {
    const id = req.params.id;

    try{
        const contact = await getOneContact(id);
        if(!contact){
            return res.status(404).json({message: "Contact not found"});  
        }
        res.status(200).json(contact);
    }catch (error){
        console.error(`There was an error retrieving the contact ${id}`, error);
        res.status(500).json({
            message: "Failed to retrieve contact"
        });
    }
}
