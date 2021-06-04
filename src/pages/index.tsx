import { useEffect } from "react";
import Information from "../components/Information/Information";
import Menu from "../components/Menu/Menu";
import SolarSystem from "../components/SolarSystem/SolarSystem";
import { useApp } from "../contexts/appContext";
import { api } from "../services/Api";
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
      <Information left='none' right='2rem' />
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
