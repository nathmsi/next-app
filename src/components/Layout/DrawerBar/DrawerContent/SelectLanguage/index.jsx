import styles from "./index.module.scss";
import {Select, MenuItem} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";



const SelectLanguage = ({}) => {
  const { i18n } = useTranslation('common');


  return (
    <div className={styles.container}>
      <Select
        value={i18n?.language}
        onChange={(event) => {
          i18n.changeLanguage(event.target.value)
        }}
      >
        {[{
          label: 'hebrew',
          value: 'he'
        },{
          label: 'english',
          value: 'en'
        }].map(el => (
          <MenuItem  key={el.value} value={el.value}>{el.label}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectLanguage;
