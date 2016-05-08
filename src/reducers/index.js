import {combineReducers} from 'redux';
import companiesReducer from './companies';
import productsReducer from './products';
import selectedCompanyReducer from './selected-company';
import selectedProductReducer from './selected-product';

export default combineReducers({
    companies: companiesReducer,
    products: productsReducer,
    selectedCompany: selectedCompanyReducer,
    selectedProduct: selectedProductReducer
});