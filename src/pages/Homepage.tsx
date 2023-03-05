import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import styles from './Homepage.module.scss';
import { StoreState } from '../types';
import { FaPlus } from 'react-icons/fa';
import { showAddItem } from '../store/actions/city.actions';

const Homepage = () => {
  const cities = useSelector((state: StoreState) => state.city.cities);
  const showAdd = useSelector((state: StoreState) => state.city.showAdd);
  const dispatch = useDispatch();

  const onAddClickHandler = () => {
    dispatch(showAddItem());
  };

  return (
    <div className={styles.container}>
      {cities.length > 0 &&
        cities.map((city, i) => <Card city={city} key={i} />)}
      {cities.length < 4 && (
        <div className={styles.addButtonBox}>
          {!showAdd && (
            <>
              <div>Add City</div>
              <FaPlus size={50} onClick={() => onAddClickHandler()} />
            </>
          )}
          {showAdd && <SearchBar />}
        </div>
      )}
    </div>
  );
};

export default Homepage;
