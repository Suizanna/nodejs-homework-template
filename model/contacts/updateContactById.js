const getAllContacts = require("./getAllContacts");
const updateContacts = require("./updateContacts");

const updateContactById = async (contactId, body) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex(
    (contact) => String(contact.id) === String(contactId)
  );

  if (index === -1) {
    return null;
  }
  //contacts[index] - старый контакт
  //body - новый контакт
  const updateContact = { ...contacts[index], ...body };
  contacts[index] = updateContact; //этим обновляем контакт
  await updateContacts(contacts);
  console.log(updateContact);
  // console.log(contacts); //здесь уже весь json с обновленным контактом
  return updateContact;
};

module.exports = updateContactById;
