import { useApp } from '../../contexts/appContext';
import styles from './styles.module.scss';

export default function SolarSystem() {

    const { stars } = useApp()

    return (
        <div className={styles.container}>
            {stars.map(star => {
                return (
                    <img id={star.name} key={star.name} src={star.image} />
                )
            })}
        </div>
    )
}