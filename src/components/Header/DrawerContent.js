import React from 'react'


import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import PaletteIcon from '@material-ui/icons/Palette';

import CloseIcon from '@material-ui/icons/Close';
import SwitchDarkMode from './SwitchDarkMode';
import LanguageIcon from '@material-ui/icons/Language';

import { useRouter } from 'next/router'


import { useTranslation, withNamespaces } from 'react-i18next';

import SelectLanguage from './SelectLanguage';



import useWindowDimensions from '../../hooks/useWindowsDimention';
import { Avatar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    headerClose: {
        paddingBottom: 0,
        paddingTop: 0
    },
    iconButon: {
    },
    navLink: {
        // color: theme.palette.secondary.main
    },
    navLinkActive: {
        //color: theme.palette.secondary.main,
        backgroundColor: theme.palette.action.hover
    },
    titleDrawer: {
        // color: theme.palette.secondary.main,
        fontSize: 28
    },
    titleStyle: {
        padding: 0
    },
    categoriesList: {
        margin: 5,
        maxHeight: props => props.height - 520,
        overflow: 'auto'
    }
}));


const ListElementHeader = (props) => {
    const router = useRouter()
    const { height } = useWindowDimensions();
    const classes = useStyles({ height });
    const { t } = useTranslation();

    const {
        toggleDrawer,
        openCollspseMenu,
        setOpenCollspseMenu
    } = props;

    const handleTitleClicked = () => {
        if (router.asPath !== '/') {
            router.push('/');
            toggleDrawer();
        }
    }




    return (
        <div className={classes.list}>

            <div>
                <List style={{ paddingTop: 0 }} >
                    {/* <ListItem onClick={toggleDrawer} className={classes.navLink} >
                        <ListItemIcon>
                            <IconButton style={{ height: 40, width: 40 }} color="inherit" onClick={toggleDrawer} ><CloseIcon color="inherit" /></IconButton>
                        </ListItemIcon>
                        <ListItemText primary={t('Psaume')} />
                    </ListItem> */}
                    <ListItem onClick={toggleDrawer} button  to="/" className={(router.asPath === '/') ? classes.navLinkActive : classes.navLink} >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('Home')} />
                    </ListItem>
                    <ListItem onClick={toggleDrawer} button  to="/psaumes" className={(router.asPath === '/psaumes') ? classes.navLinkActive : classes.navLink} >
                        <ListItemIcon>
                            <Avatar alt="Remy Sharp" src={'./assets/psaumes.jpg'} />
                        </ListItemIcon>
                        <ListItemText primary={t('Psaumes')} />
                    </ListItem>

                    <ListItem onClick={toggleDrawer} button  to="/tikkoun-haklali" className={(router.asPath === '/tikkoun-haklali') ? classes.navLinkActive : classes.navLink} >
                        <ListItemIcon>
                            <Avatar alt="Remy Sharp" src={'./assets/icon.png'} />
                        </ListItemIcon>
                        <ListItemText primary={t('Tikkun Haklali')} />
                    </ListItem>

                </List>
            </div>

            <div className={classes.footerfixed}>
                <Divider />
                <List>
                    <ListItem className={classes.navLink} >
                        <ListItemIcon> <LanguageIcon /></ListItemIcon>
                        <SelectLanguage />
                    </ListItem>
                    <ListItem className={classes.navLink} button >
                        <ListItemIcon> <PaletteIcon /></ListItemIcon>
                        <SwitchDarkMode darkMode={t('Dark Mode')} />
                    </ListItem>
                </List>
            </div>

        </div>
    );
};




export default ListElementHeader;
