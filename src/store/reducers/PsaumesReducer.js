
import {
    SELECTED_PSAUME
} from '../actions/types'

import PSAUMES from './psaumes.json';


const INITIAL_STATE = {
    psaumes: PSAUMES.data,
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
