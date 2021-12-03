import { combineReducers } from 'redux';
import api from './api/reducer';
import common from './common/reducer';
import main from './main/reducer';

const reducer = combineReducers({
  common,
  main,
  api,
})

export default reducer;

