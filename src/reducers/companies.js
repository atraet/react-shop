import {REQUEST_COMPANIES, RECEIVE_COMPANIES, RECEIVE_COMPANIES_ERROR} from '../actions/types';

export default function (state = {
    isFetching: false,
    companies: []
}, action) {
    switch (action.type) {
        case REQUEST_COMPANIES:
            return Object.assign({}, state,
                {
                    isFetching: true
                });
        case RECEIVE_COMPANIES:
            return Object.assign({}, state,
                {
                    isFetching: false,
                    items: action.companies
                });
        case RECEIVE_COMPANIES_ERROR:
            return Object.assign({}, state,
                {
                    isFetching: false,
                    error: true
                });
        default:
            return state;
    }

}