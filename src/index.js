import React from "react";
import  ReactDOM  from "react-dom";
import App from './App';

//store
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


//actions
import {addCharacterById} from './actions'

//seting up store
const store = createStore(rootReducer);

// console.log(`store.getState():`, store.getState());
//chech if the store has updated
store.subscribe(()=>console.log('store.getState(): ',store.getState()))

//dispatch the action
const RandomCharacter = Math.floor(Math.random()*10)
store.dispatch(addCharacterById(RandomCharacter));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,document.getElementById('root'));
