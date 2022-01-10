import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/authorization';
import { useTranslation } from 'react-i18next';
import s from './Styles.module.css';


export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation();


  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.title}>{t('register-page')}</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
        <span className={s.labelItem}>{t('name')}</span>
          <input type="text" name="name" value={name} className={s.input} onChange={handleChange} />
        </label>

        <label className={s.label}>
        <span className={s.labelItem}>{t('email')}</span>
          <input
            type="email"
            name="email"
            value={email}
            className={s.input}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
        <span className={s.labelItem}>{t('password')}</span>
          <input
            type="password"
            name="password"
            value={password}
            className={s.input}
            title='Password must be at least 8 characters and contain letters (a-z) and digits (0-9)'
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.button}>{t('sign-up')}</button>
      </form>
    </div>
  );
}