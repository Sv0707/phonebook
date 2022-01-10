import s from "./ContactsList.module.css";
import { deleteContact } from "../../redux/contacts/contactsOperations";
import { useSelector, useDispatch } from "react-redux";
// import { getFilteredContacts } from "../../redux/contacts/contactsSelector";
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
  };

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
