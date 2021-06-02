import styles from './styles.module.scss';

export default function Menu() {
    return (
        <div className={styles.container}>
            <h1> The Solar System </h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </p>

            <div className={styles.starContainer}>
                <div className={styles.star}>
                    <img src="/sun.svg" />
                    <div>
                        <h2>Sun</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}