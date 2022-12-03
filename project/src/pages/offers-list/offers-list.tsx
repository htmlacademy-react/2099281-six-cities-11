import Cards from '../../components/cards/cards';
import {RentInfo} from '../../types/types';

type CardsOffers = {
  offers: RentInfo;
}

function OffersCards({offers}: CardsOffers): JSX.Element {
  const [cardsInfo] = offers;
  return(
    <Cards cardsInfo={cardsInfo}/>
  );
}
export default OffersCards;
