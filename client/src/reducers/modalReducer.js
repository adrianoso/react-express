import { SHOW_MODAL, HIDE_MODAL } from '../actions/types';

const initialState = {
    showModal: false,
    type: null,
    title: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                showModal: true,
                type: action.payload.type,
                title: action.payload.title
            };
        case HIDE_MODAL:
            return initialState;
        default:
            return state;
    }
}

