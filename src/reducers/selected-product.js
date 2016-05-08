import {SELECT_PRODUCT, DESELECT_PRODUCT} from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case SELECT_PRODUCT:
            return action.product;
        case DESELECT_PRODUCT:
            return null;
        default:
            return state;
    }
}