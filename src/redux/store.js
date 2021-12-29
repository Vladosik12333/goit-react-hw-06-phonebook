import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts/contacts-reducer';

export default configureStore({ reducer: contacts });
