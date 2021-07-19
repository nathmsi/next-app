import React from 'react';

import styles from './index.module.scss';
import Parser from 'html-react-parser';

import {
 Typography
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';


const Pasouk = ({ label, value }) => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.container}>
            <Typography align="right" variant="h6">
            <span>[{t(label + 1)}]</span> {Parser(value)}
            </Typography>
        </div>
    )
}

export default Pasouk;