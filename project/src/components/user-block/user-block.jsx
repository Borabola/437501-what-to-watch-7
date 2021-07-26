import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import {AuthorizationStatus} from '../../const';
import {logout} from '../../store/api-actions';

function UserBlock({authorizationStatus, onLogout}) {

  return (
    <ul className="user-block">
      {(authorizationStatus === AuthorizationStatus.AUTH)
        ?
        <>
          <li className="user-block__item">
            <Link to={AppRoute.MY_LIST}>
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </Link>

          </li>

          <li className="user-block__item">
            <Link
              to={AppRoute.ROOT}
              className="user-block__link"
              onClick={()=> {
                onLogout();
              }}
            >
              <span>{localStorage.getItem('login')}</span>
            </Link>
          </li>
        </>
        :
        <Link
          to={AppRoute.SIGN_IN}
          className="user-block__link"
        >
        Sign in
        </Link>}
    </ul>
  );
}

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,

});

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});

export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
