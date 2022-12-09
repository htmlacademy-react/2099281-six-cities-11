import { Link } from 'react-router-dom';
import { useRef, FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AppRoute, CITIES } from '../../constants';
import { changeCity, resetSort } from '../../store/offers-store/offers-actions';

function LoginScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  const handleItemClick = (currentCity: string) => {
    dispatch(changeCity(currentCity));
    dispatch(resetSort());
  };

  const randomIndex = Math.floor(Math.random() * CITIES.length);

  const city = CITIES[randomIndex];

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="" onSubmit={handleFormSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" type="email" name="email"
                id="name" placeholder="Email" required ref={loginRef}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                ref={passwordRef}
                pattern="^(?=.*\d)(?=.*[a-zA-Z]).*$"
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link
              className="locations__item-link"
              to={AppRoute.Root}
              onClick={() => handleItemClick(city)}
            >
              <span>{city}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
export default LoginScreen;

