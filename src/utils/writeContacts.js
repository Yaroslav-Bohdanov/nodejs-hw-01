import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

const writeContacts = async (contacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw error;
  }
};

module.exports = writeContacts;
