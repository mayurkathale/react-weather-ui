import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      This weather app is using OpenWeatherApi App.
    </div>
  );
};

export default Header;
