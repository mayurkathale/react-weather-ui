import { CityReducerState } from '../../types';
import { ACTIONS } from '../constants/action-types';

const initialState: CityReducerState = {
  cities: [],
  data: [],
  showAdd: true,
  showDropdown: true,
};

export const CityReducer = (
  state: CityReducerState = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case ACTIONS.ADD_CITY:
      return { ...state, cities: [...state.cities, payload] };

    case ACTIONS.REMOVE_CITY:
      const i = state.cities.findIndex((city: any) => city.id === payload);
      const newCities = state.cities.slice(i, 1);
      return state;

    default:
      return state;
  }
};
