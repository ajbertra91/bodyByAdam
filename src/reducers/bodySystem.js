import { setBodySystem, Filters } from '../actions';

const INITIAL_STATE = setBodySystem(Filters.SHOW_SKIN);

export function bodySystem(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_BODY_SYSTEM':
            return {
                ...state,
                selected: action.selected
            };
        default:
            return state;
    }
};
