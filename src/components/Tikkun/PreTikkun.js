import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import useWindowDimensions from '../../hooks/useWindowsDimention';
import { withNamespaces } from 'react-i18next';


import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
    passouk: {

    },
    content: {
        height: props => props.height - 108,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        overflow: 'auto',
        width: '100%',
    }
}));



function TehilimComponent() {

    const { height } = useWindowDimensions();
    const classes = useStyles({ height });


    const {
        preTikun
    } = useSelector(state => state.tikkoun);

    //console.log(preTikun);



    return (
        <>
            <div className={classes.root}>
                <Typography align="center" variant="h5">
                    {preTikun[0]}
                </Typography>
            </div>
            <div className={classes.root}>
                <Typography align="center" variant="h5">
                    {preTikun[1]}
                </Typography>
            </div>
        </>
    );
}



export default withNamespaces()(TehilimComponent);
