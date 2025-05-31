import createFakeContact from '../utils/createFakeContact.js';
import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...existingContacts, newContact];
    await writeContacts(updatedContacts);
    console.log('One contact added successfully:', newContact);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

addOneContact();
