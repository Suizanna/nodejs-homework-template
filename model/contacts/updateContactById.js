const getAllContacts = require("./getAllContacts");
const updateContacts = require("./updateContacts");

const updateContactById = async (id, data) => {
  const contacts = await getAllContacts();
  //не работает
  // "message": "Product with id=undefined not found"
  const idx = contacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  const updateContact = { ...contacts[idx], ...data };
  contacts[idx] = updateContact;

  await updateContacts(contacts);
  return updateContacts;
};
module.exports = updateContactById;
