import styles from './styles.module.scss';

type StarLineProps = {
    color : string
}

export default function StarLines(props : StarLineProps) {
    return (
        <>
            <div className={styles.lineBackground} style={{background: props.color}}/>
            <div className={styles.lineBackground} style={{background: props.color}}/>
            <div className={styles.lineBackground} style={{background: props.color}}/>
        </>
    )
}