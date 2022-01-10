import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { changeFilter} from "./contactsActions";
import { addContact, deleteContact, fetchContacts } from "./contactsOperations";


const itemsReducer = createReducer([], {
    [fetchContacts.fulfilled]: (state, {payload}) => state = payload,
    [addContact.fulfilled]: (state, action) => [...state, action.payload],
    [deleteContact.fulfilled]: (state, action) => state.filter(contact => {return contact.id !== action.payload.id}),
})

const loadingReducer = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
    [addContact.pending]: () => true,
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
})

const errorReducer = createReducer(null, {
    [fetchContacts.pending]: () => null,
    [fetchContacts.rejected]: (_, action) => action.payload,
    [addContact.pending]: () => null,
    [addContact.rejected]: (_, action) => action.payload,
    [deleteContact.pending]: () => null,
    [deleteContact.rejected]: (_, action) => action.payload,
})

const filterReducer = createReducer('', {
    [changeFilter]: (_, action) => action.payload,
})

const contactsReducer = combineReducers({
    items: itemsReducer,
    loading: loadingReducer,
    error: errorReducer,
    filter: filterReducer
});

export default contactsReducer;
