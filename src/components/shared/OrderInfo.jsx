import React from 'react';
import {connect} from 'react-redux';
import {deselectCompany, deselectProduct} from '../../actions/';

class OrderInfo extends React.Component {
    render() {
        return (
            <div className="row">
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
            <div className="col-sm-6">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        {this.props.selectedCompany.handelsnaam}
                        <i className="glyphicon glyphicon-remove-circle"
                           onClick={this.removeCompany.bind(this)}></i>
                    </div>
                    <div className="panel-body">{this.props.selectedCompany.handelsnaam}</div>
                </div>
            </div>
        )
    }

    renderProduct() {
        if (!this.props.selectedProduct) {
            return null;
        }
        return (
            <div className="col-sm-6">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        {this.props.selectedProduct.productnaam}
                        <i className="glyphicon glyphicon-remove-circle"
                           onClick={this.removeProduct.bind(this)}></i>
                    </div>
                    <div className="panel-body">{this.props.selectedProduct.productnaam}</div>
                </div>
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