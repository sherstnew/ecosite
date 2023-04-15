import styles from './AboutBlock.module.scss';
import earth from '../../static/images/earth.gif';

export const AboutBlock = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__text}>
        <div className={styles.header}>как мы помогаем экологии?</div>
        <div className={styles.plain}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima dignissimos pariatur laboriosam, harum magnam voluptates praesentium amet. Cum sequi assumenda aspernatur incidunt, reprehenderit deserunt temporibus ab praesentium porro maiores!
          Deserunt qui odit repudiandae fugiat, possimus quia doloribus dolorum dolores sit magnam facilis exercitationem corrupti maxime, quidem praesentium esse velit perspiciatis sequi officiis numquam hic. Architecto commodi assumenda veritatis repellendus!
          Natus adipisci excepturi ducimus? Distinctio quos ullam nam vitae ea! Iure doloremque perferendis, at sit natus eius nam ex laudantium. Est laborum quidem incidunt nesciunt inventore illo harum vel ab.
        </div>
      </div>
      <img src={earth} alt="земля" className={styles.about__img} />
    </div>
  )
}