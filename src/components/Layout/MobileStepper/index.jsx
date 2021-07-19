import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

import styles from "./index.module.scss";
import AutoComplateStepper from "./AutoComplateStepper";
import { useTranslation } from 'react-i18next';

const AutoPlaySwipeableViews = SwipeableViews;

const SwipeableTextMobileStepper = ({
  title,
  showMenuStep,
  length,
  children,
}) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = length;
  const { t } = useTranslation('common');

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1;
    });
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const setCurrentStep = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={styles.root}>
      {showMenuStep && (
        <div className={styles.stepperMenu}>
          <Button size="small" onClick={handleBack}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            {t("Back")}
          </Button>
          <AutoComplateStepper
            activeStep={(activeStep + 1)?.toString()}
            setCurrentStep={setCurrentStep}
            length={length}
          />
          <Button size="small" onClick={handleNext}>
            {t("Next")}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        </div>
      )}

      {title && (
        <Paper square elevation={0} className={styles.header}>
          <Typography>{title}</Typography>
        </Paper>
      )}
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {children({ activeStep })}
      </AutoPlaySwipeableViews>
    </div>
  );
};

export default SwipeableTextMobileStepper;
