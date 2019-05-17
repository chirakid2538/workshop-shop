import React from 'react';
import { TextInput, Button } from 'grommet';
import { connect } from 'react-redux';
class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = async () => {
        const { login } = this.props;
        try {
            await login(this.state);
            alert('Login Success');
        } catch (e) {
            alert('Login Error');
        }

    }

    render() {
        return (
            <div>
                <TextInput placeholder="Username" name="username" onChange={this.handleChange} />
                <TextInput placeholder="Password" name="password" type="password" onChange={this.handleChange} />
                <Button label="Sign in" onClick={this.handleLogin} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: dispatch.user.login
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);