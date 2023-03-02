import styles from './Card.module.scss';
import WeatherImage from './WeatherImage';
import calender from '../assets/calendar.png';
import WeatherDetails from './WeatherDetails';
import rain from '../assets/rain.png';
import humid from '../assets/humidity.png';
import wind from '../assets/wind.png';
import { CitiesState } from '../types';
import {
  GetApiUrl,
  GetHourlyIndex,
  DataHourly,
  DataDaily,
  GetWeatherType,
  GetCurrentTime,
  IsDay,
} from '../helper';
import useFetch from '../hooks/useFetch.hook';
import Moment from 'react-moment';
import Temp from './Temp';

interface Props {
  city: CitiesState;
}

const Card = ({ city }: Props) => {
  const url = GetApiUrl(city);
  const { data, error, loading } = useFetch(url);
  let hourlyIndex;
  if (data) {
    hourlyIndex = GetHourlyIndex(data);
    console.log(data.current_weather.time);
  }
  return (
    data &&
    hourlyIndex && (
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div style={{ textAlign: 'justify' }}>{city.name}</div>
          <div style={{ textAlign: 'right' }}>
            <Moment format="H:mm">{GetCurrentTime(data.timezone)}</Moment>
          </div>
        </div>
        {IsDay(data.timezone, data.daily.sunrise[0], data.daily.sunset[0])
          ? 'isday'
          : 'is night'}
        <WeatherImage type="cloudy" width="30%" />
        <div>{GetWeatherType(data.current_weather.weathercode)}</div>
        <div className={styles.temperature}>
          <Temp temp={data.current_weather.temperature} />
        </div>
        <div>
          Max: <Temp temp={data.daily.temperature_2m_max[0]} /> Min:{' '}
          <Temp temp={data.daily.temperature_2m_min[0]} />
        </div>
        <WeatherDetails>
          <div className={styles.imgContent}>
            <img src={rain} width="24" alt="rain" />{' '}
            {data.daily.precipitation_probability_max[0]}%
          </div>
          <div className={styles.imgContent}>
            <img src={humid} width="24" alt="rain" />{' '}
            {data.hourly.relativehumidity_2m[hourlyIndex]}%
          </div>
          <div className={styles.imgContent}>
            <img src={wind} width="24" alt="rain" />{' '}
            {data.current_weather.windspeed} km/h
          </div>
        </WeatherDetails>
        <WeatherDetails title="Today" subtitle="Mon, 27">
          {DataHourly(data, hourlyIndex).map((data) => (
            <div className={styles.detail}>
              <div>
                <Temp temp={data.temp} />
              </div>
              <WeatherImage type="cloudy" width="24" />
              <div>
                <Moment format="hh:mm">{data.time}</Moment>
              </div>
            </div>
          ))}
        </WeatherDetails>
        <WeatherDetails
          title="Next Forecast"
          subtitle={<img src={calender} width="24" alt="calendar" />}
        >
          <div className={styles.detail}>
            {DataDaily(data).map((daily) => (
              <div className={styles.dailyRecord}>
                <div>
                  <Moment format="ddd, d">{daily.time}</Moment>
                </div>
                <div>{daily.weathercode}</div>
                <div>
                  <Temp temp={daily.max} /> <Temp temp={daily.min} />
                </div>
              </div>
            ))}
          </div>
        </WeatherDetails>
      </div>
    )
  );
};

export default Card;
