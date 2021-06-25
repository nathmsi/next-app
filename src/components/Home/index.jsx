import React from 'react';

import styles from './index.module.scss';

import Header from '../Layout/Header';
import Button from '../Commons/Button';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router'

const Home = ({}) => {
    const router = useRouter();

    const { t } = useTranslation();

    const handleChangePage = (path) => {
        router.push(path);
    }

    return (
        <div className={styles.container}>
            <Header title='ראשי' />
            <div className={styles.content}>
                <Button onClick={() => handleChangePage('psaumes')} name="תהלים" />
                <Button onClick={() => handleChangePage('tikoun-haklali')} name="תיקון הכללי" />
            </div>
        </div>
    )
}

export default Home;