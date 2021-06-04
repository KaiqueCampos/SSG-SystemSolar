import Information from "../components/Information/Information";
import Menu from "../components/Menu/Menu";
import SolarSystem from "../components/SolarSystem/SolarSystem";
import styles from '../styles/app.module.scss';

type Star = {
  name: string;
  diameter: string;
  distanceFromSun: string;
  image: string;
  description: string;
  satellites: string;
  moons: string;
  color: string;
}

type HomeProps = {
  stars: Star[]
}

export default function Home({ stars }: HomeProps) {

  stars.map(star => console.log(star.name))

  return (
    <div className={styles.container}>
      <Menu />
      <SolarSystem />
      <Information left='none' right='2rem' />
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/stars');
  const data = await response.json()
  return {
    props: {
      stars: data
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}
