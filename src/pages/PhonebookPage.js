import ContactsList from "../../src/components/ContactsList/ContactsList";
import { useDispatch, useSelector } from 'react-redux';
import Section from "../../src/components/Section/Section";
import ContactForm from "../../src/components/ContactForm/ContactForm";
import Filter from "../../src/components/Filter/Filter";
import { fetchContacts } from "../redux/contacts/contactsOperations";
import { useEffect } from "react";
import { getLoading } from "../redux/contacts/contactsSelectors";
import { useTranslation } from 'react-i18next';
import s from './Styles.module.css';


const PhonebookPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


   return (
      <div className={s.container}>
        <h1 className={s.title}>{t('phonebook')}</h1>
          <ContactForm />
        <Section title={t('contacts')}>
          <Filter />
          {loading && <h2>{t('loading')}</h2>}
            <ContactsList />  
        </Section>
      </div>
    );
  
}

export default PhonebookPage;
