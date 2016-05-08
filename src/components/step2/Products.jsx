import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as actions from '../../actions/';

class Products extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(actions.fetchProducts('fffff'));
    }

    render() {
        return this.props.products
            ? this.renderProductsView()
            : this.renderEmptyView()
    }

    renderEmptyView() {
        return null;
    }

    renderProductsView() {
        return (
            <div>
                <ul className="list-group">
                    {this.renderProducts()}
                </ul>
            </div>
        )
    }

    renderProducts() {
        return this.props.products.map(product => {
            return (
                <li className="list-group-item"
                    key={product.productnaam}
                    onClick={this.selectProduct.bind(this, product)}>
                    <span>{product.productnaam}</span>
                    <span>{product.productomschrijving}</span>                 
                </li>
            )
        })
    }

    selectProduct(product) {
        const {dispatch} = this.props;
        dispatch(actions.selectProduct(product));

        browserHistory.push('/checkout');
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.items
    }
}

export default connect(mapStateToProps)(Products) ;