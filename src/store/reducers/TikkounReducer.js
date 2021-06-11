
import {
    SELECTED_TEHELIM
} from '../actions/types'

import PSAUMES from './tikkoun_haklali.json';


const INITIAL_STATE = {
    tikkoun: PSAUMES.tikkun,
    preTikun: PSAUMES.preTikun,
    postTikun: PSAUMES.postTikun,
    selctedTehilim: 0
};


const TikounReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECTED_TEHELIM: 
            return { ...state , selctedTehilim: action.payload }
        default:
            return state;
    }
}

export default TikounReducer;


