import { SHOW_MODAL, HIDE_MODAL } from './types';

export const showModal = (type, title) => ({
    type: SHOW_MODAL,
    payload: {
        type,
        title
    }
});

export const hideModal = () => ({
    type: HIDE_MODAL
});