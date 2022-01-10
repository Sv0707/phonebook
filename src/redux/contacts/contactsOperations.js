import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ENDPOINT = 'contacts';


const fetchContacts = createAsyncThunk(
  'items/fetchContacts',
  async () => {
    const response = await axios.get(`/${API_ENDPOINT}`)
    return response.data;
  }
)

const addContact = createAsyncThunk(
  'items/addContact',
  async (newContact) => {
    const response = await axios.post(`/${API_ENDPOINT}`, newContact);
    return response.data;
  }
)

const deleteContact = createAsyncThunk(
  'items/deleteContact',
  async (id) => {
    await axios.delete(`/${API_ENDPOINT}/${id}`);
        return id;
  }
)

export { fetchContacts, addContact, deleteContact };