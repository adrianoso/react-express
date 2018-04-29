import {FETCH_TASKS, FINISH_TASK, ADD_TASK, REMOVE_TASK, ADD_COMMENT} from '../actions/types';

const initialState = {
    tasks: [],
    count: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_TASKS:
            return {
                ...state,
                tasks: action.payload.tasks,
                count: action.payload.count
            };
        case ADD_TASK:
            let arr = state.tasks.slice();
            arr.push(action.payload);
            arr.sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            });
            return {
                ...state,
                tasks: arr,
                count: state.count + 1
            };
        case REMOVE_TASK:
            // return {
            //     ...state,
            //     tasks: arr,
            //     count: state.count + 1
            // };
        case FINISH_TASK:
            return {
                ...state,
                tasks: state.tasks.filter( task => task._id !== action.payload),
                count: state.count - 1
            };
        case ADD_COMMENT:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task._id === action.payload._id) {
                        return {...task, comment: action.payload.comment}
                    } else {
                        return task;
                    }
                })
            };
        default:
            return state;
    }
}