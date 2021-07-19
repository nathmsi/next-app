import React from 'react';

import styles from './index.module.scss';

import Header from '../Layout/Header';

import MobileStepper from '../Layout/MobileStepper';

import Tehelim from '../Psaume/Tehelim';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Psaumes = ({}) => {

    const { psaumes } = useSelector(state => state?.psaumes);

    const { t } = useTranslation('common');


    return (
        <div className={styles.container}>
            <Header title={t('Psaumes')} arrowBack />
            <MobileStepper  showMenuStep={true} length={psaumes?.length}>
                {({ activeStep }) => {
                    return psaumes?.map(
                        (content , index) =>
                            (index === activeStep) ?
                                <Tehelim key={index} psaume={content} />
                                : <div key={index} />
                    )
                }}
            </MobileStepper>
        </div>
    )
}

export default Psaumes;