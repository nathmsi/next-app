import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Drawer
} from '@material-ui/core';
import styles from './index.module.scss';
import DrawerContent from "./DrawerContent";

import {
    Menu
} from '@material-ui/icons';

const DrawerBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);


    return (
        <div className={styles.container}>
            <IconButton onClick={handleOpen} edge="start" className={styles.drawerButton} color="inherit" aria-label="menu">
                <Menu />
            </IconButton>
            <Drawer open={isOpen} onClose={handleClose}>
                <DrawerContent />
            </Drawer>
        </div>
    )
}

export default DrawerBar;