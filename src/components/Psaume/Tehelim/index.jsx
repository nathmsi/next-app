import React from 'react';

import styles from './index.module.scss';

import Pasouk from './Pasouk';

const Psaume = ({ psaume, label }) => {

    return (
        <div className={styles.container}>
            <div className={styles.label}>
                {label}
            </div>
            {psaume?.map((pasouk, index) => <Pasouk key={index} label={index} value={pasouk} />)}
        </div>
    )
}

export default Psaume;