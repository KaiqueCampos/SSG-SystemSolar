import styles from './styles.module.scss';

export default function SolarSystem() {
    return (
        <div className={styles.container}>
            <img id='sun' src="https://sunhc.com.br/wp-content/uploads/2020/09/580b585b2edbce24c47b270f.png" />
            <img id="mercury" src="https://nineplanets.org/wp-content/uploads/2020/03/mercury.png" />
            <img id='venus' src="https://meioambiente.culturamix.com/blog/wp-content/uploads/2010/06/46.gif" />
            <img id='earth' src="https://images.vectorhq.com/images/previews/7a4/planet-earth-psd-463904.png" />
            <img id='mars' src="https://pngimg.com/uploads/mars_planet/mars_planet_PNG38.png" />
            <img id='jupter' src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/jupiter.png'/>
            <img id='saturn' src='https://www.solarsystemscope.com/spacepedia/images/handbook/renders/saturn.png'/>
            <img id='uranus' src='https://nineplanets.org/wp-content/uploads/2019/09/uranus.png'/>
            <img id='neptune' src='https://nineplanets.org/wp-content/uploads/2019/09/neptune.png'/>

        </div>
    )
}