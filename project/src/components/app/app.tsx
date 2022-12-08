import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute, AuthorizationStatus, DEFAULT_CITY } from '../../constants';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import ErrorsScreen from '../../pages/error-screen/error-screen';
import PrivateRoute from '../../pages/private-route/private-route';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/offers-store/offers-actions';

function App(): JSX.Element {

  const dispatch = useAppDispatch();
  dispatch(changeCity(DEFAULT_CITY.name));

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen />}/>
        <Route path={AppRoute.Login} element={<LoginScreen/>}/>
        <Route path={AppRoute.Room} element={<PropertyScreen/>}/>
        <Route path={AppRoute.Private} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NotAuthorized}><FavoritesScreen/></PrivateRoute>} />
        <Route path={AppRoute.Error} element={<ErrorsScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
