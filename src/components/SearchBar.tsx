import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCity,
  showAddItem,
  showDropDown,
} from '../store/actions/city.actions';
import { CitiesState, StoreState } from '../types';
import Loading from './Loading';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const showDropdown = useSelector(
    (state: StoreState) => state.city.showDropdown
  );

  const searchKeyDownHandler = async (
    event: React.FormEvent<HTMLInputElement>
  ): Promise<void> => {
    if (searchRef.current) {
      setSearch(searchRef.current.value);
      if (searchRef.current.value.length > 3) {
        setLoading(true);
        dispatch(showDropDown(true));
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${searchRef.current.value}`
        );
        const res: any = await response.json();
        setResults(res.results);
        setLoading(false);
      }
    }
  };

  const handleCityClick = (result: any): void => {
    const allowed = ['id', 'country_code', 'latitude', 'longitude', 'name'];
    const filtered = Object.fromEntries(
      allowed.map((k) => [k, result[k]])
    ) as CitiesState;
    dispatch(showDropDown(false));
    dispatch(addCity(filtered));
    dispatch(showAddItem());
  };

  return (
    <div className={styles.container}>
      <input
        ref={searchRef}
        type="text"
        className={styles.searchText}
        placeholder="Search"
        onChange={searchKeyDownHandler}
        value={search}
      />
      {results && showDropdown && search.length > 3 && (
        <ul className={styles.autoContainer}>
          {loading && <Loading />}
          {!loading &&
            results.map((result: any, i) => {
              let style: any = {};
              if (i % 2) {
                style.className = `${styles.odd} ${styles.list}`;
              } else {
                style.className = `${styles.list}`;
              }
              const image = `https://assets.open-meteo.com/images/country-flags/${result.country_code.toLowerCase()}.svg`;
              return (
                <li
                  {...style}
                  key={result.id}
                  onClick={() => handleCityClick(result)}
                >
                  <img src={image} alt="flag" /> {result.name}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};
export default SearchBar;
