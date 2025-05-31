import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const contactsToWrite = Array.isArray(updatedContacts) ? updatedContacts : [];
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contactsToWrite, null, 2));
  } catch (err) {
    console.error('Помилка запису файлу:', err);
    throw err;
  }
};
