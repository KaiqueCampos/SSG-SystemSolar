import { useEffect } from "react";
import Information from "../components/Information/Information";
import Menu from "../components/Menu/Menu";
import SolarSystem from "../components/SolarSystem/SolarSystem";
import { useApp } from "../contexts/appContext";
import { api } from "../services/Api";
import styles from '../styles/app.module.scss';

type Star = {
  id: string;
  name: string;
  diameter: string;
  distanceFromSun: string;
  image: string;
  description: string;
  satellites: string;
  moons: string;
  color: string;
  temperature: string
}

type HomeProps = {
  data: Star[]
}

export default function Home({ data }: HomeProps) {

  const { getStars } = useApp()

  useEffect(() => {
    getStars(data);
  }, [])

  return (
    <div className={styles.container}>
      <Menu />
      <SolarSystem />
      <Information
        left='none'
        right='2rem'
        satallites='There are 3000 artificial satellites in the solar system, all of them are in the orbit of planet Earth'
        moon='Currently, 214 natural satellites are known to orbit the celestial bodies of the solar system.'
        temperature="The average temperature of the solar system is -201°C (Neptune) and 6000°C (solar surface)"
        width={''}
      />
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await api.get('stars');
  return {
    props: {
      data: data
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}
