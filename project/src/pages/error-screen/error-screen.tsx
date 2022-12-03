import { Link } from 'react-router-dom';
import Logo from '../logo/logo';

function ErrorsScreen(): JSX.Element {
  return(
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--404">
        <div className="container">
          <section className="errors">
            <h1 className="login__title">404</h1>
            <p>Page not found</p>
            <Link to='/'>Go home</Link>
          </section>
        </div>
      </main>
    </div>
  );
}
export default ErrorsScreen;
