import React from 'react';
import {browserHistory} from 'react-router';

class Checkout extends React.Component {
    render() {
        return (
            <div>
                <h2>Check out</h2>
                <div className="btn btn-lg btn-warning"
                     onClick={this.placeOrder.bind(this)}>
                    Buy it!
                </div>
            </div>
        )
    }

    placeOrder() {
        browserHistory.push('/order-complete');
    }
}

export default Checkout;