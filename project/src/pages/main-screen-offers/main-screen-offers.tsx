
import {DEFAULT_CITY} from '../../constants';
import Map from '../../components/map/map';
import OffersList from '../offers-list/offers-list';
import { offers } from '../../mocks/offers';
import SortForm from '../sort-form/sort-form';


function MainScreenOffers(): JSX.Element {
  const currentCity = DEFAULT_CITY;
  const offersForCity = offers.filter((offer) =>offer.city.name === currentCity.name);
  const selectedPoint = offersForCity[0].city.location;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersForCity.length}  places to stay in {currentCity.name}</b>
        <SortForm />
        <OffersList/>
      </section>
      <div className="cities__right-section">
        <Map city={currentCity} offers={offersForCity} selectedPoint={selectedPoint}/>
      </div>
    </div>

  );
}
export default MainScreenOffers;
