import React from 'react';

import styles from './index.module.scss';

import {
 Typography
} from '@material-ui/core';

const Pasouk = ({ label, value }) => {
    return (
        <div className={styles.container}>
            [{label}]
            <Typography align="right" variant="h6">
                {value}
            </Typography>
        </div>
    )
}

export default Pasouk;