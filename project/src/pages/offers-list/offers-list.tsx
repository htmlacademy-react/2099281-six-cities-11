import Cards from '../../components/cards/cards';
import { OffersType } from '../../types/types';


type OffersScreenProps = {
  offers: OffersType;
}
function OffersList(props : OffersScreenProps): JSX.Element {
  const {offers} = props;
  return(
    <Cards offers = {offers}/>
  );
}
export default OffersList;
