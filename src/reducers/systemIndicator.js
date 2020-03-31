import { setSystemIndicator } from '../actions';

const INITIAL_STATE = {filter: false};

export function systemIndicator(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_SYSTEM_INDICATOR':
            return {
                filter: action.filter
            }
        default:
            return state;
    }
};
