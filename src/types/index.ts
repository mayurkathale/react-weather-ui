export type StoreState = {
  city: CityReducerState;
};

export type CityReducerState = {
  cities: CitiesState[];
  data: [];
  showAdd: boolean;
  showDropdown: boolean;
};

export type CitiesState = {
  id: number;
  country_code: string;
  longitude: number;
  latitude: number;
  name: string;
};

export type WeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
  };
  hourly: {
    time: [string];
    temperature_2m: [number];
    weathercode: [number];
  };
  daily: {
    time: [string];
    weathercode: [number];
    temperature_2m_max: [number];
    temperature_2m_min: [number];
    sunrise: [string];
    sunset: [string];
    uv_index_max: [string];
    precipitation_probability_max: [number];
  };
};
