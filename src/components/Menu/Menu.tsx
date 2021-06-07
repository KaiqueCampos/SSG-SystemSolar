import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useApp } from '../../contexts/appContext';
import styles from './styles.module.scss';

type CloseMenuProps = 'close' | 'visible'

export default function Menu() {

    const { stars } = useApp();
    const [menuState, setMenuState] = useState<CloseMenuProps>('visible')

    function menuToogle() {

        const element = document.getElementById('close')
        setMenuState(menuState === 'visible' ? 'close' : 'visible')
    }

    return (
        <div className={styles.container} id={menuState}>

            {menuState === 'visible' ? (
                <>
                    <button className={styles.closeButton} onClick={menuToogle}>
                        <img src='/close.jpg' />
                    </button>

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
                                    <div className={styles.star} key={star.id}>
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
                </>
            ) : (
                <button className={styles.closeButton} onClick={menuToogle}>
                    <img src='/menuIcon.png' />
                </button>
            )}

        </div>
    )
}