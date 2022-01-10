import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { authSelectors } from '../redux/authorization';
import s from './Styles.module.css';


const HomeView = () => {
  const { t } = useTranslation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
  <div className={s.container}>
    <h1 className={s.title}>
    {isLoggedIn ? <>{t('hello-user')}{' '}
      <span role="img" aria-label="Иконка приветствия">
      🤗
      </span></> : <>
      {t('hello')}{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span></>}

    </h1>
  </div>
  )
  }

export default HomeView;