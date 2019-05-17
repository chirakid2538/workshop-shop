import React from 'react';
import { Grommet, Box } from 'grommet';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';

import AppBar from './components/AppBar';
import ProductListPage from './pages/ProductListPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute';
import PaymentPage from './pages/PaymentPage';


class App extends React.Component {

    render() {
        const { isLoading } = this.props;
        if (isLoading) {
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Router>
                <Grommet plain full>
                    <Box direction="column" fill>
                        <AppBar />
                        <Switch>
                            <Route path="/" exact component={ProductListPage} />
                            <Route path="/checkout" exact component={CheckoutPage} />
                            <Route path="/order/:orderId" exact component={PaymentPage} />
                            <Route path="/login" exact component={LoginPage} />
                            <PrivateRoute path="/profile" exact component={ProfilePage} />
                            <Route component={() => <div>404 Page not found!</div>} />
                        </Switch>
                    </Box>
                </Grommet>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: !state._persist.rehydrated
    }
}
export default connect(mapStateToProps)(App);
