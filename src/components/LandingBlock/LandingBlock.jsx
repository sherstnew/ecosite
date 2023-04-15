import styles from './LandingBlock.module.scss';

export const LandingBlock = () => {
  return (
    <div className={styles.landing}>
      <header className={styles.header}>ECO</header>
      <div className={styles.slogan}>make nature better</div>
    </div>
  );
}