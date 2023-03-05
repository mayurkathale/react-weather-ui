import styles from './Card.module.scss';
import WeatherImage from './WeatherImage';
import calender from '../assets/calendar.png';
import WeatherDetails from './WeatherDetails';
import rain from '../assets/rain.png';
import humid from '../assets/humidity.png';
import wind from '../assets/wind.png';
import { CitiesState, WeatherData } from '../types';
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
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeCity } from '../store/actions/city.actions';
import React from 'react';
import Loading from './Loading';

interface Props {
  city: CitiesState;
}
interface FetchedWeatherData {
  data: WeatherData;
  error: any;
  loading: any;
}

const Card = ({ city }: Props) => {
  const url = GetApiUrl(city);
  const { data, loading }: FetchedWeatherData = useFetch(url);
  const dispatch = useDispatch();
  let hourlyIndex;
  if (data) {
    hourlyIndex = GetHourlyIndex(data);
  }

  const handleCardDelete = (id: number): void => {
    dispatch(removeCity(id));
  };

  return (
    <React.Fragment>
      {loading && <Loading />}
      {!loading && data && hourlyIndex !== undefined && (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>{city.name}</div>
            <div>
              <Moment format="H:mm">{GetCurrentTime(data.timezone)}</Moment>
            </div>
            <div>
              <AiOutlineDelete
                size={20}
                style={{ color: 'red' }}
                onClick={() => handleCardDelete(city.id)}
              />
            </div>
          </div>
          <WeatherImage
            day={IsDay(
              data.timezone,
              data.daily.sunrise[0],
              data.daily.sunset[0]
            )}
            code={data.current_weather.weathercode}
            width="30%"
          />
          <div>
            {GetWeatherType(data.current_weather.weathercode)
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
          </div>
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
            {DataHourly(data, hourlyIndex).map((hourlyData, i) => (
              <div className={`${styles.detail} ${styles.center}`} key={i}>
                <div>
                  <Temp temp={hourlyData.temp} />
                </div>
                <WeatherImage
                  day={IsDay(
                    data.timezone,
                    data.daily.sunrise[0],
                    data.daily.sunset[0]
                  )}
                  code={hourlyData.weathercode}
                  width="24"
                />
                <div>
                  <Moment format="hh:mm">{hourlyData.time}</Moment>
                </div>
              </div>
            ))}
          </WeatherDetails>
          <WeatherDetails
            title="Next Forecast"
            subtitle={<img src={calender} width="24" alt="calendar" />}
          >
            <div className={styles.detail}>
              {DataDaily(data).map((daily, i) => (
                <div className={styles.dailyRecord} key={i}>
                  <div>
                    <Moment format="ddd, D">{daily.time}</Moment>
                  </div>
                  <div>
                    <WeatherImage
                      code={daily.weathercode}
                      day={true}
                      width="22"
                    />
                  </div>
                  <div>
                    <Temp temp={daily.max} /> <Temp temp={daily.min} />
                  </div>
                </div>
              ))}
            </div>
          </WeatherDetails>
        </div>
      )}
    </React.Fragment>
  );
};

export default Card;
