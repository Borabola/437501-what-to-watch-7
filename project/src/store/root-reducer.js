import {combineReducers} from 'redux';
import {filmData} from './film-data/film-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: 'DATA',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: filmData,
  [NameSpace.USER]: user,
});
