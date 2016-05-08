import {SELECT_COMPANY, DESELECT_COMPANY} from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case SELECT_COMPANY:
            return action.company;
        case DESELECT_COMPANY:
            return null;
        default:
            return state;
    }
}