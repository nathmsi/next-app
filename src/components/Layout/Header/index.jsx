import React from 'react';

import styles from './index.module.scss';

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button
} from '@material-ui/core';
import { useRouter } from 'next/router'

import {
    ArrowBack
} from '@material-ui/icons';


const Header = ({ title, arrowBack }) => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    }
    
    return (
        <div className={styles.container}>
            {arrowBack && <IconButton onClick={handleBack} edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
                <ArrowBack />
            </IconButton>}
            <Typography variant="h6" className={styles.title}>
                {title}
            </Typography>
            <div className={styles.actions}>
                {/* <Button color="inherit"></Button> */}
            </div>
        </div>
    )
}

export default Header;