import Information from "../components/Information/Information";
import Menu from "../components/Menu/Menu";
import SolarSystem from "../components/SolarSystem/SolarSystem";
import styles from '../styles/app.module.scss';

export default function Home() {
  return (

    <div className={styles.container}>
      <Menu />
      <SolarSystem />
      <Information left='none' right='2rem' />
    </div>
  )
}
