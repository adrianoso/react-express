import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from './authReducer';
import modalReducer from './modalReducer';
import taskReducer from './taskReducer';

export default combineReducers({
    routing: routerReducer,
    user: authReducer,
    modal: modalReducer,
    tasks: taskReducer
})