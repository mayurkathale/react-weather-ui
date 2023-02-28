import styles from './Card.module.scss';
import WeatherImage from './WeatherImage';
import calender from '../assets/calendar.png';
import WeatherDetails from './WeatherDetails';
import rain from '../assets/rain.png';
import humid from '../assets/humidity.png';
import wind from '../assets/wind.png';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div style={{ textAlign: 'justify' }}>City</div>
        <div style={{ textAlign: 'right' }}>-</div>
      </div>
      <WeatherImage type="cloudy" width="30%" />
      <div className={styles.city}>Mumbai V</div>
      <div className={styles.temperature}>
        31<span>*</span>
      </div>
      <div>Max: 30 Min: 20</div>
      <WeatherDetails>
        <div className={styles.imgContent}>
          <img src={rain} width="24" alt="rain" /> 5%
        </div>
        <div className={styles.imgContent}>
          <img src={humid} width="24" alt="rain" /> 10%
        </div>
        <div className={styles.imgContent}>
          <img src={wind} width="24" alt="rain" /> 12 km/h
        </div>
      </WeatherDetails>
      <WeatherDetails title="Today" subtitle="Mon, 27">
        <div className={styles.detail}>
          <div>30C</div>
          <WeatherImage type="cloudy" width="24" />
          <div>11:23</div>
        </div>
        <div className={styles.detail}>
          <div>30C</div>
          <WeatherImage type="cloudy" width="24" />
          <div>11:23</div>
        </div>
        <div className={styles.detail}>
          <div>30C</div>
          <WeatherImage type="cloudy" width="24" />
          <div>11:23</div>
        </div>
        <div className={styles.detail}>
          <div>30C</div>
          <WeatherImage type="cloudy" width="24" />
          <div>11:23</div>
        </div>
      </WeatherDetails>
      <WeatherDetails
        title="Next Forecast"
        subtitle={<img src={calender} width="24" alt="calendar" />}
      >
        <div className={styles.details}></div>
      </WeatherDetails>
      <div className={styles.sunDetails}></div>
      <div className={styles.content}>
        <span>Length of day:</span> 13H 12M
      </div>
      <div className={styles.content}>
        <span>Remaining daylight:</span> 9H 22M
      </div>
    </div>
  );
};

export default Card;
