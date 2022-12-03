import {Link} from 'react-router-dom';
import HeaderAuth from '../../components/header/header-auth';
import HeaderNoAuth from '../../components/header/header-no-auth';
import {AuthorizationStatus, AppRoute} from '../../constants';

function MainScreenHeader(): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Authorized;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Root} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.Authorized && <HeaderAuth/>}
            {authorizationStatus !== AuthorizationStatus.Authorized && <HeaderNoAuth />}
          </nav>
        </div>
      </div>
    </header>);
}

export default MainScreenHeader;
