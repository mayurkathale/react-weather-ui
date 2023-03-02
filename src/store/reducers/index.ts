import { combineReducers } from 'redux';
import { CityReducer } from './city.reducer';

const reducer = combineReducers({
  city: CityReducer,
});

export default reducer;
