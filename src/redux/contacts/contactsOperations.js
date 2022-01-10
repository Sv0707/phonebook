import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ENDPOINT = 'contacts';
const BASE_URL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get(`${BASE_URL}/${API_ENDPOINT}`)
    return response.data;
  }
)

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact) => {
    const response = await axios.post(`${BASE_URL}/${API_ENDPOINT}`, newContact);
    return response.data;
  }
)

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    const response = await axios.delete(`${BASE_URL}/${API_ENDPOINT}/${id}`);
    return response.data;
  }
)

export { fetchContacts, addContact, deleteContact };