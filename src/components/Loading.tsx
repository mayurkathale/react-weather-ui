import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadingBox}>
      <div className={styles.loadingsSpinner}></div>
    </div>
  );
};
export default Loading;
