import styles from './styles.module.scss';
import Image from 'next/image';
import animate from '../../styles/animate.module.scss'

type InformationProps = {
    left: string;
    right: string;
    satallites: string;
    moon: string;
    temperature: string;
}

export default function Information(props: InformationProps) {
    return (
        <div className={`${styles.container} ${animate.upSlow}`} style={{ left: props?.left, right: props?.right}}>
            <div>
                <Image
                    src='/satellite.svg'
                    objectFit='cover'
                    height={70}
                    width={70}
                />
                <h3>Satellite</h3>
                <p>{props.satallites}</p>
            </div>

            <div>
                <Image
                    src='/moon.svg'
                    height={70}
                    width={70}
                    objectFit='cover'
                />
                <h3>Moon's</h3>
                <p>{props.moon}</p>
            </div>

            <div>
                <Image
                    src='/temperature.svg'
                    height={70}
                    width={70}
                    objectFit='cover'
                />
                <h3>Temperature</h3>
                <p>{props.temperature}</p>
            </div>
        </div>
    )
}