import {user} from './user';
import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({authorizationStatus: AuthorizationStatus.UNKNOWN});
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const AUTH_STATUS = AuthorizationStatus.AUTH;
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AUTH_STATUS,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AUTH_STATUS});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const NO_AUTH_STATUS = AuthorizationStatus.NO_AUTH;

    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: NO_AUTH_STATUS,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: NO_AUTH_STATUS});
  });

});
