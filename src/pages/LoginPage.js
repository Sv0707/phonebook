import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/authorization';
import s from './Styles.module.css';
import { useTranslation } from 'react-i18next';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.title}>{t('login-page')}</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
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
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.button}>{t('login-btn')}</button>
      </form>
    </div>
  );
}