require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');
require('../assets/app.scss');
import React from 'react';
import Steps from './shared/Steps.jsx';
import OrderInfo from './shared/OrderInfo.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Steps />
                <OrderInfo />
                <div>{this.props.children}</div>
            </div>
        )
    }
}
export default App;