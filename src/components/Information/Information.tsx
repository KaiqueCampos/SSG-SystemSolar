import styles from './styles.module.scss';

export default function Information() {
    return (
        <div className={styles.container}>
            <div>
                <img src='/satellite.svg' />
                <h3>Satellite</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the...
                </p>
            </div>

            <div>
                <img src='/moon.svg' />
                <h3>Moon's</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the...
                </p>
            </div>

            <div>
                <img src='/Temperature.svg' />
                <h3>Temperature</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the...
                </p>
            </div>
        </div>
    )
}