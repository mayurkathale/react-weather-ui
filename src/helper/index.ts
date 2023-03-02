import moment from 'moment-timezone';
import { CitiesState, WeatherData } from '../types';

const weatherType: any = {
  '0': 'Clear sky',
  '1': 'Mainly clear',
  '2': 'partly cloudy',
  '3': 'overcast',
  '45': 'Fog',
  '48': 'depositing rime fog',
  '51': 'Drizzle: Light',
  '53': 'Drizzle: Moderate',
  '55': 'Drizzle: Heavy',
  '56': 'Freezing Drizzle: Light',
  '57': 'Freezing Drizzle: Heavy',
  '61': 'Rain: Light',
  '63': 'Rain: Moderate',
  '65': 'Rain: Heavy',
  '66': 'Freezing Rain: Light',
  '67': 'Freezing Rain: Heavy',
  '71': 'Snow fall: Light',
  '73': 'Snow fall: Moderate',
  '75': 'Snow fall: Heavy',
  '77': 'Snow grains',
  '80': 'Rain showers: Light',
  '81': 'Rain showers: Moderate',
  '82': 'Rain showers: Heavy',
  '85': 'Snow showers: Light',
  '86': 'Snow showers: Heavy',
  '95': 'Thunderstorm: Light',
  '96': 'Thunderstorm with hail',
  '99': 'Thunderstorm with hail',
};

export const GetWeatherType = (id: string): string => {
  return weatherType[id];
};

export const GetApiUrl = (city: CitiesState) => {
  return `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}0&longitude=${city.longitude}&hourly=temperature_2m,weathercode,relativehumidity_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&current_weather=true&timezone=auto`;
};

export const GetHourlyIndex = (data: WeatherData): number => {
  return data.hourly.time.indexOf(data.current_weather.time);
};

export const DataHourly = (data: WeatherData, idx: number): any[] => {
  const weathercodes: any[] = data.hourly.weathercode.slice(idx + 1, idx + 5);
  const temp: number[] = data.hourly.temperature_2m.slice(idx + 1, idx + 5);
  const time: string[] = data.hourly.time.slice(idx + 1, idx + 5);
  return weathercodes.map((wc, i) => {
    return { weathercode: wc[i], temp: temp[i], time: time[i] };
  });
};

export const DataDaily = (data: WeatherData): any[] => {
  const weathercodes: any[] = data.daily.weathercode;
  const min: number[] = data.daily.temperature_2m_min;
  const max: number[] = data.daily.temperature_2m_max;
  const time: string[] = data.daily.time;
  return weathercodes.map((wc, i) => {
    return { weathercode: wc, min: min[i], max: max[i], time: time[i] };
  });
};

export const GetCurrentTime = (timezone: string): string => {
  let options = {
      timeZone: timezone,
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    } as Intl.DateTimeFormatOptions,
    formatter = new Intl.DateTimeFormat([], options);
  return formatter.format(new Date());
};

export const IsDay = (
  timezone: string,
  sunrise: string,
  sunset: string
): boolean => {
  const currentTime = new Date(moment().tz(timezone).format());
  const sunriseTime = new Date(
    moment(new Date(sunrise)).tz(timezone, true).format()
  );
  const sunsetTime = new Date(
    moment(new Date(sunset)).tz(timezone, true).format()
  );
  return sunriseTime < currentTime && sunsetTime > currentTime;
};
