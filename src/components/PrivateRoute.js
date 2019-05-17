import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import store from '../store';

class PrivateRoute extends React.Component {
    render() {

        const { isAuthenticated, component: MyComponent, ...rest } = this.props;
        debugger
        console.log('auth', isAuthenticated);
        return (
            <Route {...rest}
                render={(props) => isAuthenticated ? <MyComponent {...props} /> : <Redirect to="/login/" />}
            />
        )
    }
}

const mapStateToProps = state => {
    console.log( 'mapStateToProps',state );
    const isAuthenticated = store.select.user.isAuthenticated;
    return {
        isAuthenticated: isAuthenticated(state)
    }
}
export default connect(mapStateToProps)(PrivateRoute);