import { SET_CURRENT_USER, SET_CURRENT_USER_ERROR, CLEAR_SET_CURRENT_USER_ERROR, CREATE_USER, LOG_OUT_USER} from "./types";
import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';

export const setCurrentUser = (user) => dispatch => {
    dispatch({
        type: SET_CURRENT_USER,
        payload: user
    });
};

export const logIn = (userData) => dispatch => {
    return axios.post('/user/login', userData)
        .then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            const user = jwtDecode(token);
            dispatch({
                type: SET_CURRENT_USER,
                payload: user
            });
        })
        .catch((error) => {
            dispatch({
                type: SET_CURRENT_USER_ERROR,
                payload: error.response.data
            });
        });
};

export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_SET_CURRENT_USER_ERROR,
        payload: {}
    });
};

export const logOut = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch({
        type: LOG_OUT_USER,
        payload: {}
    });
};

export const createUser = (userData) => dispatch => {
    return axios.post('/user/signup', userData)
        .then(response => {
            dispatch({
                type: CREATE_USER
            });
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};