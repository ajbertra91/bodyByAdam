import {uuidv4, addNote} from '../actions';

const INITIAL_STATE = addNote('');

export function notes(state = INITIAL_STATE, action) {
    switch (action.notes) {
        case 'ADD_NOTE':
            return Object.assign({}, state, {
                notes: [
                    ...state.notes,
                    {
                        id: uuidv4(),
                        text: action.text
                    }
                ]
            })
        default:
            return state;
    }
}