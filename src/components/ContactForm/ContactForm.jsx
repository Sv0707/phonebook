// import { useState } from "react";

import s from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/contactsOperations";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacts/contactsSelectors";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const phoneRegExp =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  const nameRegExp =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  const validationSchema = yup
    .object({
      name: yup
        .string()
        .matches(nameRegExp, "Неверный формат имени")
        .min(2, "В имени должно быть минимум 2 буквы")
        .required("Обязательное поле"),
      number: yup
        .string()
        .matches(phoneRegExp, "Неверный номер телефона")
        .required("Обязательное поле"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const checkedName = (name) => {
    return contacts.find(
      (contact) => name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const onSubmit = (data) => {
    const { name, number } = data;
    const id = nanoid();

    checkedName(name)
      ? alert(`${name} is already in contacts!`)
      : dispatch(addContact({ id, name, number }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <label className={s.label}>
        {" "}
        {t("name")}
        <input
          className={s.input}
          // value={name}
          type="text"
          name="name"
          {...register("name")}
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        />
        {errors.name && <p className={s.error}>{errors.name.message}</p>}
      </label>
      <label className={s.label}>
        {" "}
        {t("phone")}
        <input
          className={s.input}
          // value={number}
          type="tel"
          name="number"
          {...register("number")}
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        />
        {errors.number && <p className={s.error}>{errors.number.message}</p>}
      </label>
      <button type="submit" className={s.button}>
        {t("add-contact")}
      </button>
    </form>
  );
};

export default ContactForm;
