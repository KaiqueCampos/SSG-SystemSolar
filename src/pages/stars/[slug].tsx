import Information from '../../components/Information/Information';
import styles from '../../styles/app.module.scss';
import Link from 'next/link';

export default function Star() {
    return (
        <div className={styles.container}>
            <div className={styles.informations}>
                <Link href='/'>
                    <img id='return' src='/return.svg' alt='return to HomePage' />
                </Link>

                <h1>Venus</h1>

                <p id='planetText'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    dard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make
                    a type specimen book.
                </p>

                <h2>Distance from Earth</h2>
                <p id='planetText'>25.154.154Km</p>

                <Information left='none' right='none'/>
                
            </div>


            <div className={styles.lineBackground} />
            <div className={styles.lineBackground} />
            <div className={styles.lineBackground} />

            <img className={styles.star} src='https://pngimg.com/uploads/mars_planet/mars_planet_PNG38.png' />
        </div>
    )
}