import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      Weather data fetched from{' '}
      <a href="https://open-meteo.com/">Open Meteo Api</a>
    </div>
  );
};

export default Footer;
