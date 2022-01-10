import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/authorization';
import s from './Usermenu.module.css';
import { useTranslation } from 'react-i18next';


const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <span className={s.name}>{t('welcome')}, {name}</span>
      <button className={s.button} type="button" onClick={() => dispatch(authOperations.logOut())}>
      {t('logout')}
      </button>
    </div>
  );
};

export default UserMenu;