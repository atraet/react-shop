require('./step1.scss');
import React from 'react';
import SearchPanel from './SearchPanel.jsx';
import Companies from './Companies.jsx';

class CompanySelect extends React.Component {
    render() {
        return (
            <div>
                <a href="http://localhost/Kvk.WebApi/api/payments/csv"
                   target="_blank"
                   download>download csv</a>
                <SearchPanel />
                <Companies />
            </div>
        )
    }
}

export default CompanySelect;