import MainScreen from '../../pages/main-screen/main-screen';
import {AppRoute, AuthorizationStatus} from './const';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import ErrorsScreen from '../../pages/ErrorScreen/error-screen';
import PrivateRoute from '../../pages/private-route/private-route';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import {RentInfo, ReviewsInfo} from '../../types/types';

type AppScreenProps = {
  errorsCount: number;
  offers: RentInfo;
  reviews: ReviewsInfo;
}

function App({errorsCount, offers, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen errorsCount={errorsCount} offers={offers} reviews={reviews}/>}/>
        <Route path={AppRoute.Login} element={<LoginScreen/>}/>
        <Route path={AppRoute.Room} element={<PropertyScreen/>}/>
        <Route path={AppRoute.Private} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NotAuthorized}><FavoritesScreen/></PrivateRoute>} />
        <Route path={AppRoute.Error} element={<ErrorsScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
