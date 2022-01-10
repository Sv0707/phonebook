import { useEffect, lazy } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import AppBar from '../Appbar/Appbar';
import Container from '../Container/Container';
import { authOperations, authSelectors } from '../../redux/authorization';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';


const HomePage = lazy(() => import('../../pages/HomePage'));
const PhonebookPage = lazy(() => import('../../pages/PhonebookPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));


export default function App() {

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
{!isFetchingCurrentUser &&
    <><AppBar />

    <Switch>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterPage />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginPage />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <PhonebookPage />
            </PrivateRoute>
    </Switch></>
}
    </Container>
  );
}