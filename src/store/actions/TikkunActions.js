

import {
    SELECTED_TEHELIM
} from './types';




export const selectTehilim = (value) => {
    return (dispatch) => {
        dispatch({
            type: SELECTED_TEHELIM,
            payload: value
        })
    }
};