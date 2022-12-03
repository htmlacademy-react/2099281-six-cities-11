import Cards from '../../components/cards/cards';
import { offers } from '../../mocks/offers';

function OffersList(): JSX.Element {
  return(
    <Cards offers={offers}/>
  );
}
export default OffersList;
