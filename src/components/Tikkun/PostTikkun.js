import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import useWindowDimensions from '../../hooks/useWindowsDimention';
import { withNamespaces } from 'react-i18next';


import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(5),
    },
}));



function TehilimComponent() {

    const { height } = useWindowDimensions();
    const classes = useStyles({ height });


    const {
        postTikun
    } = useSelector(state => state.tikkoun);

    //console.log(postTikun);



    return (
        <>
            <div className={classes.root}>
                <Typography align="center" variant="h5">
                    {postTikun[0]}
                </Typography>
            </div>
        </>
    );
}



export default withNamespaces()(TehilimComponent);
