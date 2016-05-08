import * as actions from './types';
import {getCompanies, getProducts} from '../core/data-service';

export function fetchCompanies(searchText) {
    return dispatch => {
        requestCompanies();
        return getCompanies(searchText)
            .then(response => response.data,
                error => {
                    dispatch(receiveCompaniesError(error));
                })
            .then(companies => {
                dispatch(receiveCompanies(companies))
            })
    };

    function requestCompanies() {
        return {
            type: actions.REQUEST_COMPANIES
        }
    }

    function receiveCompanies(companies) {
        return {
            type: actions.RECEIVE_COMPANIES,
            companies
        }
    }

    function receiveCompaniesError(error) {
        return {
            type: actions.RECEIVE_COMPANIES_ERROR,
            error
        }
    }
}

export function fetchProducts(searchText) {
    return dispatch => {
        requestProducts();
        return getProducts(searchText)
            .then(response => response.data,
                error => {
                    dispatch(receiveProductsError(error));
                })
            .then(products => {
                dispatch(receiveProducts(products))
            })
    };

    function requestProducts() {
        return {
            type: actions.REQUEST_PRODUCTS
        }
    }

    function receiveProducts(products) {
        return {
            type: actions.RECEIVE_PRODUCTS,
            products
        }
    }

    function receiveProductsError(error) {
        return {
            type: actions.RECEIVE_PRODUCTS_ERROR,
            error
        }
    }
}

export function selectCompany(company) {
    return {
        type: actions.SELECT_COMPANY,
        company: company
    }
}

export function deselectCompany(){
    return {
        type: actions.DESELECT_COMPANY
    }
}

export function selectProduct(product) {
    return {
        type: actions.SELECT_PRODUCT,
        product: product
    }
}

export function deselectProduct(){
    return{
        type: actions.DESELECT_PRODUCT
    }
}