import {
    SELECTED_PSAUME
} from './types';




export const selectPsaumes = (value) => {
    return (dispatch) => {
        dispatch({
            type: SELECTED_PSAUME,
            payload: value
        })
    }
};