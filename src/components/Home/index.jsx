import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


import {
    Typography,
    Card,
    CardMedia,
    Grid,
    Container,
    LinearProgress,
    className
} from '@material-ui/core';
import MenuView from './MenuView';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import styles from './index.module.css';

const HomeScreen = (props) => {

    const router = useRouter();
    const { t } = useTranslation();




    const handleSubmit = (path) => {
        history.push(path);
    }




    return (
        <div className='psaumesScreen'>
            <Card className={styles.card}>
                <CardMedia image={'./assets/home1.jpg'} className={styles.media} />
                <div className={styles.overlay}>
                    <Typography color="secondary" className={styles.title}>
                        {t('Psaume')}
                    </Typography>
                </div>
            </Card>
            <Container maxWidth="lg" className={styles.container}>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item className={styles.item}>
                        <MenuView menu={'Psaumes'} handleSubmit={(val) => handleSubmit('/psaumes')} />
                    </Grid>
                    <Grid item className={styles.item}>
                        <MenuView menu={'Tikkun Haklali'} handleSubmit={(val) => handleSubmit('/tikkoun-haklali')} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}



export default HomeScreen;
