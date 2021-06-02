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
                    <img src="https://sunhc.com.br/wp-content/uploads/2020/09/580b585b2edbce24c47b270f.png" />
                    <div>
                        <h2>Sun</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the...
                        </p>
                    </div>
                    <hr/>
                </div>

                <div className={styles.star}>
                    <img src="https://nineplanets.org/wp-content/uploads/2020/03/mercury.png" />
                    <div>
                        <h2>Sun</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the...
                        </p>
                    </div>
                    <hr/>
                </div>

                <div className={styles.star}>
                    <img src="https://meioambiente.culturamix.com/blog/wp-content/uploads/2010/06/46.gif" />
                    <div>
                        <h2>Sun</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the...
                        </p>
                    </div>
                    <hr/>
                    
                </div>

                <div className={styles.star}>
                    <img src="https://images.vectorhq.com/images/previews/7a4/planet-earth-psd-463904.png" />
                    <div>
                        <h2>Sun</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the...
                        </p>
                    </div>
                    <hr/>
                </div>

                <div className={styles.star}>
                    <img src="https://pngimg.com/uploads/mars_planet/mars_planet_PNG38.png" />
                    <div>
                        <h2>Sun</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the...
                        </p>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    )
}