import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import { useTranslation } from 'react-i18next';

export default function AuthNav() {

  const { t } = useTranslation();

  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        {t('register')}
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        {t('login')}
      </NavLink>
    </div>
  );
}