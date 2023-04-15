import styles from './HomePage.module.scss';
import { Element, Link } from 'react-scroll';
import down from '../../static/icons/down-arrow.svg';
import { LandingBlock } from '../../components/LandingBlock/LandingBlock';
import { AboutBlock } from '../../components/AboutBlock/AboutBlock';

export const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <Element name='landing'>
          <LandingBlock />
        </Element>
        <Link to='about' smooth={true} className={styles.scrollDown_wrapper}>
          <img src={down} alt="" className={styles.scrollDown} />
        </Link>
        <Element name='about'>
          <AboutBlock />
        </Element>
      </div>
    </>
  )
}