import { GetWeatherImageUrl } from '../helper';

type Props = {
  code: number;
  day: boolean;
  width?: string;
};

const WeatherImage = (props: Props) => {
  const { code, day, ...rest } = props;
  return (
    <img src={GetWeatherImageUrl(code, day)} alt="weather-type" {...rest} />
  );
};

export default WeatherImage;
