
import Map from '../../components/map/map';
import OffersList from '../offers-list/offers-list';
import SortForm from '../sort-form/sort-form';
import { useAppSelector } from '../../hooks';

function MainScreenOffers(): JSX.Element {
  const currentCity = useAppSelector((state) =>state.resetSelection.selectedCity);
  const offersForCity = useAppSelector((state)=>state.resetSelection.selectedOffers);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersForCity.length}  places to stay in {currentCity.name}</b>
        <SortForm />
        <OffersList/>
      </section>
      <div className="cities__right-section">
        <Map city={currentCity} offers={offersForCity} selectedPoint={currentCity.location}/>
      </div>
    </div>
  );
}
export default MainScreenOffers;
