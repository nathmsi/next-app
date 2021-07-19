import React, { useState } from "react";

import styles from './index.module.scss';
import Button from '../../../Commons/Button';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import SelectLanguage from "./SelectLanguage";

const DrawerContent = ({ }) => {
    const router = useRouter();

    const { t } = useTranslation();

    const handleChangePage = (path) => {
        router.push(path);
    }
    return (
        <div className={styles.container}>
            <Button onClick={() => handleChangePage('psaumes')} name="תהלים" />
            <Button onClick={() => handleChangePage('tikoun-haklali')} name="תיקון הכללי" />
            <SelectLanguage />
        </div>
    )
}

export default DrawerContent;