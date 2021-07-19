import styles from "./index.module.scss";
import React, { useMemo } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AutoComplateStepper = ({ setCurrentStep, activeStep, length }) => {

  const array = useMemo(() => Array.from({ length: length }, (v, i) => (i + 1).toString()),[length]);

  return (
    <div className={styles.container}>
      <Autocomplete
        value={activeStep}
        onChange={(event, newValue) => {
          //setValue(newValue);
          console.log({ newValue})
          newValue && setCurrentStep(Number(newValue - 1))
        }}
        // inputValue={inputValue}
        // onInputChange={(event, newInputValue) => {
        //   //setInputValue(newInputValue);
        // }}
        id="controllable-states-demo"
        options={array}
        style={{ maxWidth : '40px' }}
        renderInput={(params) => (
          <TextField {...params}   variant="standard" size="small" />
        )}
        autoComplete
        autoSelect	
        closeIcon={null}
      />
    </div>
  );
};

export default AutoComplateStepper;
