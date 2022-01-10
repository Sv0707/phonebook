import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import Usermenu from '../Usermenu/Usermenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/authorization';
import LanguageSwitcher from '../../common/LanguageSwitcher';
import s from './Appbar.module.css';


export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      <LanguageSwitcher />
      {isLoggedIn ? <Usermenu /> : <AuthNav />}
    </header>
  );
}