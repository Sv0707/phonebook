import s from "./ContactsList.module.css";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/contacts/contactsOperations";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getLoading,
  getFilteredContacts,
} from "../../redux/contacts/contactsSelectors";
import { useTranslation } from "react-i18next";

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const getDeleteContact = (id) => {
    dispatch(deleteContact(id));
    // dispatch(fetchContacts());
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {!loading &&
        filteredContacts.map((contact) => {
          return (
            <li key={contact.id} className={s.item}>
              <span>{contact.name}: </span>
              <span>{contact.number}</span>
              <button
                className={s.button}
                id={contact.id}
                type="button"
                onClick={(e) => getDeleteContact(e.target.id)}
              >
                {t("delete")}
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
