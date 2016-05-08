import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App.jsx';
import CompanySelect from './components/step1/CompanySelect.jsx';
import ProductSelect from './components/step2/ProductSelect.jsx';
import Checkout from './components/step3/Checkout.jsx';
import OrderComplete from './components/order-complete/OrderComplete.jsx';

const store = applyMiddleware(reduxThunk)(createStore)(reducers);

var configStore = function configureStore(initialState) {
    const store = createStore(reducers, initialState, compose(
        applyMiddleware(reduxThunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};

ReactDOM.render(
    <Provider store={configStore()}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/select-company" component={CompanySelect}/>
                <Route path="/select-product" component={ProductSelect}/>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/order-complete" component={OrderComplete}/>
            </Route>
        </Router>
    </Provider>,
    document.querySelector('#app'));