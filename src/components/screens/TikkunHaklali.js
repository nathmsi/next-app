import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { useSelector, useDispatch } from 'react-redux';
import {
    selectTehilim
} from '../store/actions';

import useWindowDimensions from '../hooks/useWindowsDimention';

import TehilimComponent from '../components/Tikkun/TehilimComponent';
import { withNamespaces } from 'react-i18next';


const AutoPlaySwipeableViews = SwipeableViews;


const useStyles = makeStyles((theme) => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.secondary.main,
            outline: '1px solid slategrey'
        },
        'MuiToolbar-gutters': {
            padding: 0,
            margin: 0
        },
        '.MuiCardMedia-media': {
            //objectFit: 'contain'
        }
    },
    root: {
        flexGrow: 1,
        height: props => props.height - 48
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    content: {
        height: props => props.height - 48 - 110,
        display: 'flex',
        justifyContent: 'center',
        overflow: 'auto',
    },
    passouk: {

    }
}));

function Home(props) {
    const { height } = useWindowDimensions();
    const classes = useStyles({ height });
    const theme = useTheme();

    const {
        tikkoun,
        selctedTehilim
    } = useSelector(state => state.tikkoun);

    const maxSteps = tikkoun.length;

    const dispatch = useDispatch();

    const handleNext = () => dispatch(selectTehilim(selctedTehilim + 1));

    const handleBack = () => dispatch(selectTehilim(selctedTehilim - 1));

    const handleStepChange = (step) => dispatch(selectTehilim((step)));

    const handleFinish = () => dispatch(selectTehilim(0));


    return (
        <div className={classes.root}>

            {/* <TehilimComponent content={tikkoun[selctedTehilim].content} selctedTehilim={selctedTehilim} /> */}

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={selctedTehilim}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tikkoun.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(selctedTehilim - index) <= 2 ? (
                            <TehilimComponent content={step.content} selctedTehilim={selctedTehilim} />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>

            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={selctedTehilim}
                nextButton={
                    selctedTehilim === maxSteps - 1 ?
                        <Button size="medium" onClick={handleFinish} style={{ textTransform: 'none' }}>
                            <Typography variant="h6" > {props.t("go back to the beginning")} </Typography>
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                        :
                        <Button size="medium" onClick={handleNext} style={{ textTransform: 'none' }}>
                            <Typography variant="h6" > {props.t("Next")} </Typography>
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                }
                backButton={
                    <Button size="medium" onClick={handleBack} disabled={selctedTehilim === 0} style={{ textTransform: 'none' }}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        <Typography variant="h6" > {props.t("Back")} </Typography>
                    </Button>
                }
            />
        </div>
    );
}

export default withNamespaces()(Home);


