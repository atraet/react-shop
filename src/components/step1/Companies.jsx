import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as actions from '../../actions/';

class Companies extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(actions.fetchCompanies('foo-search-text'));
    }

    render() {
        return this.props.companies
            ? this.renderCompanyList()
            : this.renderEmptyView()
    }

    renderEmptyView() {
        return null;
    }

    renderCompanyList() {
        return (
            <div>
                <ul className="list-group">
                    {this.renderCompanies()}
                </ul>
            </div>
        )
    }

    renderCompanies() {
        return this.props.companies.map(c => {
            return (
                <li className="list-group-item"
                    key={c.dossiernummer}
                    onClick={this.selectCompany.bind(this, c)}>
                    <span>{c.dossiernummer}</span>
                    <span>{c.handelsnaam}</span>
                </li>
            )
        })
    }

    selectCompany(company) {
        const {dispatch} = this.props;
        dispatch(actions.selectCompany(company));

        browserHistory.push('/select-product');
    }
}

function mapStateToProps(state) {
    return {
        companies: state.companies.items
    }
}

export default connect(mapStateToProps)(Companies) ;