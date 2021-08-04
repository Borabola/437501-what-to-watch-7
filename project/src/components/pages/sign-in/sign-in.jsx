import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {login} from '../../../store/api-actions';
import {AppRoute} from '../../../const';
import Logo from '../../logo/logo';
import PageFooter from '../../page-footer/page-footer';


function SignIn() {
  const loginRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (authData) => {
    dispatch(login(authData));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
    history.push(AppRoute.ROOT);
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__htmlForm" onSubmit={handleSubmit} >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                data-testid="login"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                data-testid="password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <PageFooter />
    </div>
  );
}

export default SignIn;

