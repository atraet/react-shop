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
            <div className="company-list">
                <ul className="">
                    {this.renderCompanies()}
                </ul>
            </div>
        )
    }

    renderCompanies() {
        return this.props.companies.map(c => {
            return (
                <li className="company"
                    key={c.dossiernummer}
                    onClick={this.selectCompany.bind(this, c)}>
                    <div className="title">
                        <span>{c.handelsnaam}</span></div>
                    <span>{c.dossiernummer}</span>
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