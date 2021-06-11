import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import DrawerContent from './DrawerContent';
import NabBar from './NavBar';
import { Context as ContextNavigation } from '../../contexts/navigationContext';


const HeaderComponent = (props) => {


    const {
        state: { open },
        setOpen,
    } = React.useContext(ContextNavigation);

   

    
    const toggleDrawer = (isOpen) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(isOpen)
    };



    return (
        <>
            <NabBar />
            <SwipeableDrawer
                anchor={'left'}
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                transitionDuration={300}
            >
                <DrawerContent toggleDrawer={() => setOpen(false)} />
            </SwipeableDrawer> 
        </>
    )
}






export default HeaderComponent;
