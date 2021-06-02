import styles from './styles.module.scss';

type InformationProps = {
    left: string;
    right: string;
}

export default function Information(props: InformationProps) {
    return (
        <div className={styles.container} style={{left: props?.left, right: props?.right}}>
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