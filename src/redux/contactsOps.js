/*Використовуй функцію createAsyncThunk для оголошення операцій.
    Для виконання HTTP-запитів використай бібліотеку axios.*/

// src/redux/operations.js

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
//https://6782bb98c51d092c3dd09c18.mockapi.io/contacts
axios.defaults.baseURL = "https://6782bb98c51d092c3dd09c18.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contact);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
