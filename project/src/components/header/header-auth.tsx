import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';

function HeaderAuth(): JSX.Element {

  const handleLoginClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    //Обработка события выхода
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          <span className="header__favorite-count">3</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          to={AppRoute.Root}
          className="header__nav-link"
          onClick={handleLoginClick}
        >
          <span className="header__signout">Выйти</span>
        </Link>
      </li>
    </ul>
  );
}

export default HeaderAuth;
