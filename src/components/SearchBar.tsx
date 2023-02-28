import { KeyboardEvent, useRef, useState } from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const [search, setSearch] = useState<string>('');
  const searchRef = useRef<HTMLInputElement>(null);

  const searchKeyDownHandler = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    if (searchRef.current) setSearch(searchRef.current.value);
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
    </div>
  );
};
export default SearchBar;
