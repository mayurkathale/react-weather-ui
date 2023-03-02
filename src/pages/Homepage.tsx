import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import styles from './Homepage.module.scss';
import { StoreState } from '../types';

const Homepage = () => {
  const cities = useSelector((state: StoreState) => state.city.cities);
  return (
    <React.Fragment>
      <SearchBar />
      <div className={styles.container}>
        {cities.length > 0 &&
          cities.map((city) => <Card city={city} key={city.latitude} />)}
        {cities.length < 4 && 'ADD'}
      </div>
    </React.Fragment>
  );
};

export default Homepage;
