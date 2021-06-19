
import {
    SELECTED_PSAUME
} from '../actions/types'

import PSAUMES from '../../data/psaumes.json';
import TIKOUN from '../../data/tikkoun_haklali.json';

const INITIAL_STATE = {
    psaumes: PSAUMES.data,
    tikoun: TIKOUN.tikkun,
    selctedPsaumes: 0
};



const PsaumesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECTED_PSAUME: 
            return { ...state , selctedPsaumes: action.payload }
        default:
            return state;
    }
}



export default PsaumesReducer;
