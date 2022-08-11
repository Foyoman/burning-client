import React, { Component, useState } from 'react';

class Home extends Component {
    _handleLogin(email) {
        console.log('logging in', email);
    }

    render() {
        return (
            <div>
                <h1>Welcome to the Chicago Bulls Dream team</h1>
                <Login onSubmit={ this._handleLogin }/>
            </div>
        );
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this._handleEmail = this._handleEmail.bind(this);
        this._handlePassword = this._handlePassword.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    _handlePassword(event) {
        this.setState({ password: event.target.value });
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.email);
        this.setState({ email: '' });

        const SERVER_URL = 'http://localhost:3001/search';

        if (this.state.email === 'admin@ga.co' && this.state.password === 'chicken')
        {
            console.log('Login succesful');
            window.location.href = `${ SERVER_URL }`;
        } else {
            console.log('Login failed');
        }
    }

    render() {
        return (
              <div class="Login">
                <h2>Login</h2>
                <form onSubmit={ this._handleSubmit }>
                    <input onChange={ this._handleEmail } value={ this.state.email } type="text" placeholder="Email" email="email" />
                    <input onChange={ this._handlePassword } value={ this.state.password } type="password" placeholder="Password" password="password" />
                    <input type="submit" value="Login" />
                </form>
            </div>  
        )
    }
}

export default Home;