const getAllContacts = require("./getAllContacts");
const updateContacts = require("./updateContacts");

const removeContactById = async (contactId) => {
  const contacts = await getAllContacts();
  //не работает
  // "message": "Product with id=undefined not found"
  const idx = contacts.findIndex(
    (contact) => String(contact.id) === String(contactId)
  );
  if (idx === -1) {
    return null;
  }

  contacts.splice(idx, 1);
  await updateContacts(contacts);
  return "Success remove";
};

module.exports = removeContactById;
