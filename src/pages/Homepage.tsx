import React from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import styles from './Homepage.module.scss';

const Homepage = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <div className={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </React.Fragment>
  );
};

export default Homepage;
