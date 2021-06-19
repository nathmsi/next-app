import React from 'react';

import styles from './index.module.scss';

const Button = ({ name, onClick}) => {
    

    return (
        <div className={styles.container}>
            <div onClick={onClick} className={styles.button}>{name}</div>
        </div>
    )
}

export default Button;