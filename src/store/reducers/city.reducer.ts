import { CityReducerState } from '../../types';
import { ACTIONS } from '../constants/action-types';

const initialState: CityReducerState = {
  cities: [],
  showAdd: false,
  showDropdown: false,
};

export const CityReducer = (
  state: CityReducerState = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case ACTIONS.ADD_CITY:
      return { ...state, cities: [...state.cities, payload] };

    case ACTIONS.REMOVE_CITY:
      return {
        ...state,
        cities: [...state.cities.filter((city: any) => city.id !== payload)],
      };

    case ACTIONS.SHOW_DROPDOWN:
      return { ...state, showDropdown: payload };

    case ACTIONS.SHOW_ADD_ITEM:
      return { ...state, showAdd: !state.showAdd };

    default:
      return state;
  }
};
