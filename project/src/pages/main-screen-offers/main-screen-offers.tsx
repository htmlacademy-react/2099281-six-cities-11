
import Map from '../../components/map/map';
import OffersList from '../offers-list/offers-list';
import SortForm from '../sort-form/sort-form';
import { useAppSelector } from '../../hooks';

function MainScreenOffers(): JSX.Element {
  const currentCityName = useAppSelector((state) =>state.selectedCity);
  const offersForCity = useAppSelector((state)=>state.selectedOffers);
  const currentCity = offersForCity[0].city;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersForCity.length}  places to stay in {currentCityName}</b>
        <SortForm />
        <OffersList offers={offersForCity}/>
      </section>
      <div className="cities__right-section">
        <Map city={currentCity} offers={offersForCity} selectedPoint={currentCity.location}/>
      </div>
    </div>
  );
}
export default MainScreenOffers;
