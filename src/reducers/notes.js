import {uuidv4, addNote, Filters} from '../actions';

const INITIAL_STATE = [
    addNote({ text: '', title: 'Skin', type: Filters.SHOW_SKIN }),
    addNote({ text: '', title: 'Muscles', type: Filters.SHOW_MUSCLES }),
    addNote({ text: '', title: 'Blood', type: Filters.SHOW_BLOOD }),
    addNote({ text: '', title: 'Nerves', type: Filters.SHOW_NERVES }),
    addNote({ text: '', title: 'Bones', type: Filters.SHOW_SKELETON }),
];

export function notes(state = INITIAL_STATE, action) {
    switch (action.notes) {
        case 'ADD_NOTE':
            return Object.assign({}, state, {
                notes: [
                    ...state.notes,
                    {
                        id: uuidv4(),
                        text: action.text,
                        type: action.type
                    }
                ]
            })
        default:
            return state;
    }
}