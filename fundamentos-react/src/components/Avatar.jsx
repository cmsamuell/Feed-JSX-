import styles from './avatar.module.css';

export function Avatar({ hasBorder = true, src }) {

    return (
        <img
            src={src}
            className={hasBorder ? styles.avatarWithBorder : styles.Avatar}
        />
    )
}