import styles from './WeatherDetails.module.scss';

interface Props {
  children: React.ReactNode;
  title?: string;
  subtitle?: string | React.ReactNode;
}

const WeatherDetails = ({ children, title, subtitle }: Props) => {
  const blankBox = !title && !subtitle ? styles.blankDetailBox : '';
  const blankContent = !title && !subtitle ? styles.blankDetail : '';
  const boxClass = `${blankBox} ${styles.detailBox}`;
  const contentClass = `${blankContent} ${styles.detail}`;
  return (
    <div className={boxClass}>
      {title && subtitle && (
        <div className={styles.header}>
          <div>{title}</div>
          <div>{subtitle}</div>
        </div>
      )}
      <div className={contentClass}>{children}</div>
    </div>
  );
};
export default WeatherDetails;
