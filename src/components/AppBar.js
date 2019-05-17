import React from 'react'
import { connect } from 'react-redux';
import { Box, Heading, Button } from 'grommet';
import ShoppingCartButton from './ShoppingCartButton';
import { withRouter } from 'react-router-dom';
import store from '../store';

class AppBar extends React.Component {
    render() {

        const { dispatchLogout, isAuthenticated } = this.props;
        return (
            <Box
                tag='header'
                direction='row'
                align='center'
                justify='between'
                background='brand'
                pad={{
                    left: 'medium',
                    right: 'medium',
                    vertical: 'small'
                }}
                elevation='medium'
                style={{ zIndex: '1' }}
            >
                <Heading
                    level="4"
                    margin="xsmall"
                >
                    Devincube store

                </Heading>
                <Box style={{ width: '400px' }} direction="row">
                    <Button label="Home" onClick={() => this.props.history.push('/')} />
                    <ShoppingCartButton />
                    {
                        !isAuthenticated ?
                            <Button label="Login" onClick={() => this.props.history.push('/login/')} />
                            : (
                                <React.Fragment>
                                    <Button label="Logout" onClick={() => dispatchLogout()} />
                                    <Button label="My Profile" onClick={() => this.props.history.push('/profile/')} />
                                </React.Fragment>
                            )
                    }
                </Box>
            </Box>
        )
    }
}



const mapStateToProps = (state) => {
    const isAuthenticated = store.select.user.isAuthenticated;
    return {
        isAuthenticated: isAuthenticated(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLogout: dispatch.user.logout
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppBar))
