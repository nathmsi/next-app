import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useTranslation } from 'react-i18next';

import SelectDarkMode from './SelectDarkMode';

import { useSelector } from 'react-redux';
// context navigation
import { Context as ContextNavigation } from '../../contexts/navigationContext';
import { selectTehilim } from '../../store/actions';
import { Button } from '@material-ui/core';

import { useRouter } from 'next/router'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    }
}));

function NavBar(props) {
    const classes = useStyles();
    const router = useRouter()
    const {t} = useTranslation();

    const {
        setOpen
    } = React.useContext(ContextNavigation);

    const {
        tikkoun,
        selctedTehilim
    } = useSelector(state => state.tikkoun);



    const {
        psaumes,
        selctedPsaumes
    } = useSelector(state => state.psaumes);



    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary" >
                <Toolbar variant="dense"  >
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Button style={{ textTransform: 'none' }}  to="/" color="inherit">
                        <Typography variant="h6" color="inherit">
                            {t("Home")}
                        </Typography>
                    </Button>

                    <div className={classes.grow} />
                    {
                        router.asPath !== '/psaumes' ?
                            <Typography variant="h6" color="inherit">
                                {t("Psaume")}   {t(tikkoun[selctedTehilim].label)}
                            </Typography>
                            :
                            <Typography variant="h6" color="inherit">
                                {t("Psaume")}   {t(psaumes[selctedPsaumes].label)}
                            </Typography>
                    }
                    <div className={classes.grow} />
                    <SelectDarkMode />
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default NavBar;