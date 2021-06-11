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

import { connect , useDispatch } from 'react-redux';
import {
    selectPsaumes
} from '../store/actions';

import useWindowDimensions from '../hooks/useWindowsDimention';

import TehilimComponent from '../components/Tehilim/TehilimComponent';
import { withNamespaces } from 'react-i18next';
import styled from 'styled-components'


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

const Container = styled.div`
    @media screen and (min-width: 600px) {
        width: 80%
    }
    @media screen and (min-width: 900px) {
        width: 70%
    }
    @media screen and (min-width: 1200px) {
        width: 60%
    }
    @media screen and (min-width: 1600px) {
        width: 50%
    }
`;

function Home(props) {
    const { height } = useWindowDimensions()
    const classes = useStyles({ height })
    const theme = useTheme()

    const {
        psaumes,
        selctedPsaumes
    } = props

    const maxSteps = psaumes.length


    const handleNext = () => props.selectPsaumes(selctedPsaumes + 1)

    const handleBack = () => props.selectPsaumes(selctedPsaumes - 1)

    const handleStepChange = (step) => props.selectPsaumes(step)

    const handleFinish = () => props.selectPsaumes(0)


    return (
        <Container>
            <div className={classes.root}>

                {/* <TehilimComponent content={tikkoun[selctedTehilim].content} selctedTehilim={selctedTehilim} /> */}

                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={selctedPsaumes}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {psaumes.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(selctedPsaumes - index) <= 2 ? (
                                <TehilimComponent content={step.content} selctedTehilim={selctedPsaumes} />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>

                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={selctedPsaumes}
                    nextButton={
                        selctedPsaumes === maxSteps - 1 ?
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
                        <Button size="medium" onClick={handleBack} disabled={selctedPsaumes === 0} style={{ textTransform: 'none' }}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            <Typography variant="h6" > {props.t("Back")} </Typography>
                        </Button>
                    }
                />
            </div>
        </Container>
    );
}



const mapStateToProps = (state) => ({
    psaumes: state?.psaumes?.psaumes ?? [],
    selctedPsaumes: state?.psaumes?.selctedPsaumes ?? 0
})

const mapDispatchToProps = {
    selectPsaumes: (val) => selectPsaumes(val)
}

export default withNamespaces()(connect(mapStateToProps, mapDispatchToProps)(Home));