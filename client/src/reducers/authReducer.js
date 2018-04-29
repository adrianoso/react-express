import { SET_CURRENT_USER, SET_CURRENT_USER_ERROR, CLEAR_SET_CURRENT_USER_ERROR, CREATE_USER , LOG_OUT_USER} from "../actions/types";
import isEmpty from 'lodash/isEmpty';

const initialState = {
    isAuthenticated: false,
    userData: {},
    error: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case CREATE_USER:
            return {
                ...state
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                userData: action.payload
            };
        case SET_CURRENT_USER_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case CLEAR_SET_CURRENT_USER_ERROR:
            return {
                ...state,
                error: {}
            };
        case LOG_OUT_USER:
            return initialState;
        default:
            return state;
    }
}