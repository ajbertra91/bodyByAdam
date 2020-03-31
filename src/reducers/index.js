import { combineReducers } from 'redux';
import { bodySystem } from './bodySystem';
import { notes } from './notes';
import { systemIndicator } from './systemIndicator';

export default combineReducers({
    bodySystem,
    notes,
    systemIndicator
})