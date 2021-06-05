import Information from '../../components/Information/Information';
import styles from '../../styles/app.module.scss';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../services/Api';
import StarLines from '../../components/starLines/starLines';

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

type StarsProps = {
    star : Star
}

export default function Star({star} : StarsProps) {
    return (
        <div className={styles.container}>
            <div className={styles.informations}>
                <Link href='/'>
                    <img id='return' src='/return.svg' alt='return to HomePage' />
                </Link>

                <h1>{star.name}</h1>

                <p id='planetText'>{star.description}</p>

                <h2>Distance from Sun</h2>
                <p id='planetText'>{star.distanceFromSun}</p>

                <Information
                    left='none'
                    right='none'
                    satallites={star.satellites}
                    moon={star.moons}
                    temperature={star.temperature}
                />

            </div>

            <StarLines color={star.color}/>

            <img className={styles.star} src={star.image} />
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    //Get all data
    const { data } = await api.get('stars')

    const paths = data.map(star => {
        return {
            params: {
                slug: star.id
            }
        }
    })

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const { slug } = ctx.params;
    const { data } = await api.get(`/stars/${slug}`)

    return {
        props: {
            star: data
        },
        revalidate: 60 * 60 * 24
    }
}