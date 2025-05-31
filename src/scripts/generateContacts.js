import createFakeContact from '../utils/createFakeContact.js';
import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

const generateContacts = async (count) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ length: count }, createFakeContact);
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`${count} contacts generated successfully!`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
