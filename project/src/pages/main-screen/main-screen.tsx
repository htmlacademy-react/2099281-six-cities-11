import MainScreenHeader from '../main-screen-header/main-screen-header';
import { CITIES } from '../../constants';
import City from '../../components/city/city';
import MainScreenOffers from '../main-screen-offers/main-screen-offers';

function MainScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <MainScreenHeader/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (<City key={city} cityName={city} />))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <MainScreenOffers/>
        </div>
      </main>
    </div>
  );
}
export default MainScreen;
