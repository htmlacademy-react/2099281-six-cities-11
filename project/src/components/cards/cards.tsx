import { RentInfo } from '../../types/types';
import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../constants';

type CardScreenProps = {
  offers: RentInfo;
}

function Cards( props: CardScreenProps): JSX.Element {
  const { offers } = props;
  const [offerHover, cardsofferHoverHandler] = useState([false, false, false, false]);
  return (
    <div>
      {offers.map((offer, id) => {
        const keyValue = `${id}-${offer.src}`;
        return (
          <article key={keyValue} id={`offer-${id}`} onMouseEnter={(event: MouseEvent<HTMLElement>) => { if (event) { cardsofferHoverHandler([...offerHover.slice(0, id), ...offerHover.slice(id + 1)]); } }} className="cities__place-card place-card">
            <div className="cities__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src={offer.src} width="260" height="200" alt="Place image" />
              </a>
            </div>
            <div className="place-card__info">
              <div style={{ width: '50%' }}>
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">{offer.current} {offer.price}</b>
                    <span className="place-card__price-text">&#47;&nbsp;{offer.time}</span>
                  </div>
                  <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" style={{ width: '15%' }}>
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '50%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '60%' }}>
                <h2 className="place-card__name">
                  <Link to={AppRoute.Room}>{offer.title}</Link>
                </h2>
                <p className="place-card__type" >{offer.type}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Cards;
