import { CitiesState } from '../../types';
import { ACTIONS } from '../constants/action-types';

export const addCity = (city: CitiesState) => {
  return {
    type: ACTIONS.ADD_CITY,
    payload: city,
  };
};

export const removeCity = (city: number) => {
  return {
    type: ACTIONS.REMOVE_CITY,
    payload: city,
  };
};

export const showDropDown = (payload: boolean) => {
  return {
    type: ACTIONS.SHOW_DROPDOWN,
    payload: payload,
  };
};

export const showAddItem = () => {
  return {
    type: ACTIONS.SHOW_ADD_ITEM,
    payload: {},
  };
};
