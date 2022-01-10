import { createSelector } from "@reduxjs/toolkit";

const getContacts = state => state.contacts.items;
const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  });

export { getContacts, getLoading, getFilter, getFilteredContacts };
