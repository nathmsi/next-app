import React from 'react';

import styles from './index.module.scss';

import Header from '../Layout/Header';

import MobileStepper from '../Layout/MobileStepper';

import Tehelim from '../Psaume/Tehelim';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Home = ({ }) => {
    const { tikoun } = useSelector(state => state?.psaumes);

    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <Header title='תיקון הכללי' arrowBack />
            <MobileStepper showMenuStep={true} length={tikoun?.length} >
                {({ activeStep }) => {
                    return tikoun?.map(
                        ({ label, content }, index) =>
                            (index === activeStep) ?
                                <Tehelim key={index} psaume={content} label={t(label)} />
                                : <div key={index} />
                    )
                }}
            </MobileStepper>
        </div>
    )
}

export default Home;