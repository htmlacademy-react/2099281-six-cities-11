import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

type OffersProps = {
  cityName: string;
}

function City({ cityName }: OffersProps): JSX.Element {
  const handleItemClick = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    event.preventDefault();
  };

  const selectedCityName = 'Amsterdam';
  const classActive = selectedCityName === cityName ? 'tabs__item--active' : '';
  return (
    <li className="locations__item">
      <Link
        to={AppRoute.Root}
        className={`locations__item-link tabs__item ${classActive}`}
        onClick={handleItemClick}
      >
        <span>{cityName}</span>
      </Link>
    </li>
  );
}

export default City;
