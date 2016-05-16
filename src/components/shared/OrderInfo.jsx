require('./order-info.scss');

import React from 'react';
import {connect} from 'react-redux';
import {deselectCompany, deselectProduct} from '../../actions/';

class OrderInfo extends React.Component {
    render() {
        return (
            <div className="order-info">
                {this.renderCompany()}
                {this.renderProduct()}
            </div>
        )
    }

    renderCompany() {
        if (!this.props.selectedCompany) {
            return null;
        }
        return (
            <div className="item company">
                {this.props.selectedCompany.handelsnaam}
                <i className="glyphicon glyphicon-remove-circle"
                   onClick={this.removeCompany.bind(this)}></i>
            </div>
        )
    }

    renderProduct() {
        if (!this.props.selectedProduct) {
            return null;
        }
        return (
            <div className="item product">
                {this.props.selectedProduct.productnaam}
                <i className="glyphicon glyphicon-remove-circle"
                   onClick={this.removeProduct.bind(this)}></i>
            </div>
        )
    }

    removeCompany() {
        this.props.dispatch(deselectCompany());
    }

    removeProduct() {
        this.props.dispatch(deselectProduct());
    }
}

function mapStateToProps(state) {
    const {selectedCompany, selectedProduct} = state;

    return {
        selectedCompany,
        selectedProduct
    }
}

export default connect(mapStateToProps)(OrderInfo) ;