import React from 'react';
import {Link} from 'react-router';

class Steps extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/select-company">Select Company</Link>
                    </li>
                    <li>
                        <Link to="/select-product">Select Product</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Checkout</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Steps;