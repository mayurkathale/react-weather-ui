import sunny from '../assets/sunny.png';
import expectedRain from '../assets/expected-rain.png';
import cloudy from '../assets/cloudy.png';

type Props = {
  type: 'sunny' | 'expected' | 'cloudy';
  width?: string;
};

const getImage = (type: string): string => {
  let image = sunny;
  switch (type) {
    case 'sunny':
      image = sunny;
      break;
    case 'expected':
      image = expectedRain;
      break;
    case 'cloudy':
      image = cloudy;
      break;
    default:
      image = sunny;
      break;
  }
  return image;
};

const WeatherImage = (props: Props) => {
  const { type, ...rest } = props;
  return <img src={getImage(type)} alt="weather-type" {...rest} />;
};

export default WeatherImage;
