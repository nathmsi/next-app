
import {
    SELECTED_PSAUME
} from '../actions/types'

import PSAUMES from './psaumes.json';


const INITIAL_STATE = {
    language: 'en',
    menuLanguages: [
        'en', 'fr', 'he'
    ]
};



const AppReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECTED_PSAUME:
            return { ...state, selctedPsaumes: action.payload }
        default:
            return state;
    }
}



export default AppReducer;
