import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export default async function writeContacts(contacts) {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw error;
  }
}
