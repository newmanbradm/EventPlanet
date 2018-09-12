import React, { Component } from 'react';

class LoginForm extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form className="login-form">
                    <h3>Login</h3>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.onChange} />
                    <br />
                    <br />
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" value={this.state.email} onChange={this.onChange} />
                    <br />
                    <br />
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" autoComplete="password" value={this.state.password} onChange={this.onChange} />
                    <br />
                    <br />
                    <button type="submit" value="Login">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
