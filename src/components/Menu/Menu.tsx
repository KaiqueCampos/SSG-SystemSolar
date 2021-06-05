import styles from './styles.module.scss';
import Image from 'next/image';
import { useApp } from '../../contexts/appContext';
import { useEffect } from 'react';
import Link from 'next/link'

export default function Menu() {

    const { stars } = useApp();

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

                {stars.map(star => {
                    return (
                        <Link href={`/stars/${star.id}`}>
                            <div className={styles.star} key={star.name}>
                                <Image
                                    src={star.image}
                                    width={450}
                                    height={450}
                                    objectFit='cover'
                                />
                                <div>
                                    <h2>{star.name}</h2>
                                    <p>{`${star.description.substring(0, 95)}...`}</p>
                                </div>
                                <hr />
                            </div>
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}