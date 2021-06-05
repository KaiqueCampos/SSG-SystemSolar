import { useState } from 'react';
import { useApp } from '../../contexts/appContext';
import styles from './styles.module.scss';

export default function SolarSystem() {

    // Context
    const { stars } = useApp()

    function showNameStar(starName) {
        //Get Legend container
        const element = document.getElementById(`${starName}Legend`)

        //Change atrributes 
        element.style.opacity = '1'
    }

    function hiddenStarName(starName) {

        //Remover all placed styles
        document.getElementById(`${starName}Legend`).removeAttribute('style')
    }

    return (
        <div className={styles.container}>
            {stars.map(star => {
                return (
                    <div
                        id={star.name}
                        key={star.name}
                        onMouseEnter={() => showNameStar(star.name)}
                        onMouseLeave={() => hiddenStarName(star.name)}
                    >
                        <img
                            src={star.image}
                            alt={star.name}
                        />

                        <div id={`${star.name}Legend`} className={styles.legend}>
                            <img src='/lineName.svg' />
                            <p>{star.name}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}