import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/authorization';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
  const { t } = useTranslation();

  return (
  <nav>
    <NavLink to="/" exact className={s.link}
        activeClassName={s.activeLink}>
      {t('main')}
    </NavLink>

  {isLoggedIn && <NavLink
    to="/contacts"
    exact
    className={s.link}
      activeClassName={s.activeLink}
  >
    {t('contacts')}
  </NavLink>}
  </nav>
)}

export default Navigation;