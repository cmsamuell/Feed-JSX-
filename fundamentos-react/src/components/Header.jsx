import igniteLogo from '../images/Ignite simbol.svg';

import styles from './header.module.css';


export function Header() {
    return (
        <header className={styles.header}>
            <img
                src={igniteLogo}
                alt='logotipo ignite'
            />
        </header>
    )
}