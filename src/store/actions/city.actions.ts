import { CitiesState } from '../../types';
import { ACTIONS } from '../constants/action-types';

export const addCity = (city: CitiesState) => {
  return {
    type: ACTIONS.ADD_CITY,
    payload: city,
  };
};

export const removeCity = (id: number) => {
  return {
    type: ACTIONS.REMOVE_CITY,
    payload: id,
  };
};
