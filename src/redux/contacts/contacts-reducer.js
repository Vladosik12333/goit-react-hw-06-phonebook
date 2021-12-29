import { createReducer } from '@reduxjs/toolkit';
import { deleteContact, addContact, changeFitler } from './actions';
import { combineReducers } from '@reduxjs/toolkit';

const dataUsers = JSON.parse(localStorage.getItem('contacts')) ?? [];

const items = createReducer(dataUsers, {
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
  [addContact]: (state, { payload }) => [...state, payload],
});

const filter = createReducer('', {
  [changeFitler]: (_, { payload }) => payload,
});

const contacts = combineReducers({
  items,
  filter,
});

export default contacts;
