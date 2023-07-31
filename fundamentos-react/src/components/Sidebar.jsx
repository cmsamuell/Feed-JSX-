import { Avatar } from './Avatar';

import { PencilLine } from 'phosphor-react';

import styles from './sidebar.module.css';


export function Sidebar() {
    return (
        <aside className={styles.Sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50">
            </img>

            <div className={styles.profile}>
                <Avatar src="https://github.com/isacmoreira10.png" />

                <strong > Isac Moreira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='a'>
                    <PencilLine size={20} />
                    editar seu perfil
                </a>
            </footer>
        </aside>
    )
}