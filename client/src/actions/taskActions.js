import {FETCH_TASKS, FINISH_TASK , ADD_TASK, REMOVE_TASK, ADD_COMMENT} from './types';
import axios from 'axios';

export const fetchTasks = () => dispatch => {
    return axios.get('/tasks')
        .then(res => {
            dispatch({
                type: FETCH_TASKS,
                payload: {
                    tasks: res.data.tasks,
                    count: res.data.count
                }
            });
        })
        .catch((error) => {
            // dispatch({
            //     type: SET_CURRENT_USER_ERROR,
            //     payload: error.response.data
            // });
        });
};

export const addTask = (obj) => dispatch => {
    return axios.post('/tasks', obj)
        .then(res => {
            dispatch({
                type: ADD_TASK,
                payload: res.data.createdTask
            });
        })
        .catch((error) => {
            // dispatch({
            //     type: SET_CURRENT_USER_ERROR,
            //     payload: error.response.data
            // });
        });
};

export const removeTask = (id) => dispatch => {
    return axios.delete(`/tasks/${id}`)
        .then(res => {
            console.log(res)
            // dispatch({
            //     type: REMOVE_TASK,
            //     payload: res.data.createdTask
            // });
        })
        .catch((error) => {
            // dispatch({
            //     type: SET_CURRENT_USER_ERROR,
            //     payload: error.response.data
            // });
        });
};

export const finishTask = (id, obj) => dispatch => {
    return axios.put(`/tasks/${id}`, obj)
        .then(res => {
            dispatch({
                type: FINISH_TASK,
                payload: res.data._id
            });
        })
        .catch((error) => {
            // dispatch({
            //     type: SET_CURRENT_USER_ERROR,
            //     payload: error.response.data
            // });
        });
};

export const addComment = (id, obj) => dispatch => {
    return axios.put(`/tasks/comment/${id}`, obj)
        .then(res => {
            dispatch({
                type: ADD_COMMENT,
                payload: res.data
            });
        })
        .catch((error) => {
            // dispatch({
            //     type: SET_CURRENT_USER_ERROR,
            //     payload: error.response.data
            // });
        });
};