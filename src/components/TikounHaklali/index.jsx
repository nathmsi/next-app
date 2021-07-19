import React, { useState, useEffect } from "react";

import styles from "./index.module.scss";

import Header from "../Layout/Header";

import MobileStepper from "../Layout/MobileStepper";

import Tehelim from "../Psaume/Tehelim";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Home = ({}) => {
  const { tikoun, psaumes } = useSelector((state) => state?.psaumes);
  const [tikounHaklali, setTikkounHaklali] = useState([]);

  useEffect(() => {
    const listPsaumesForTikoun = psaumes.filter((el,index) =>
      tikoun.includes(Number(index + 1))
    );
    setTikkounHaklali(listPsaumesForTikoun);
  }, [psaumes, tikoun]);
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Header title={t("תיקון הכללי")} arrowBack />
      <MobileStepper showMenuStep={true} length={tikoun?.length}>
        {({ activeStep }) => {
          return tikounHaklali?.map((content, index) =>
            index === activeStep ? (
              <Tehelim key={index} psaume={content} label={index + 1} />
            ) : (
              <div key={index} />
            )
          );
        }}
      </MobileStepper>
    </div>
  );
};

export default Home;
