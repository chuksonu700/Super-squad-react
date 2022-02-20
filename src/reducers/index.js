import { combineReducers } from 'redux';
import heroes from './heroes-reducer';
import characters from './characters-reducer';

const rootReducer = combineReducers({
    heroes,
    characters
})

export default rootReducer;

// ADD_CHARACTER will return what the user did not select