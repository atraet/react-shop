import {REQUEST_PRODUCTS, RECEIVE_PRODUCTS, RECEIVE_PRODUCTS_ERROR} from '../actions/types';

export default function (state = {
    isFetching: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return Object.assign({}, state,
                {
                    isFetching: true
                });
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state,
                {
                    isFetching: false,
                    items: action.products
                });
        case RECEIVE_PRODUCTS_ERROR:
            return Object.assign({}, state,
                {
                    isFetching: false,
                    error: true
                });
        default:
            return state;
    }
}