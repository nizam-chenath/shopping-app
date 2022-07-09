import {createStore} from 'redux';
import rootReducers from './reducers';

const store = createStore(rootReducers,window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());

export default store;