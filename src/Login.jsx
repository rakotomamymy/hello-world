import React from 'react';

export default class Login extends React.PureComponent {

    state = {
        login : '',
        password : '',
        authMessage : 'Not logged yet',
        expectedLogin : 'zoro',
        expectedPassword : 'zoro'
    };

    authenticate = () => {        
        if ((this.state.login === this.state.expectedLogin) && (this.state.password === this.state.expectedPassword)) {
            this.setState({authMessage : 'User logged in'});
            this.props.history.push("/Home");
        }            
        else
            this.setState({authMessage : 'Unrecognized identity'});        
    };

    onLoginChange = (e) => {
        this.setState({login: e.target.value});
    }
    
    onPasswordChange = (e) => {
        this.setState({password : e.target.value});
    }

    render() {
        return (
            <div>
                <h3>Identify yourself</h3>
                <div>Login : {this.state.login}</div>
                <div>Password : {this.state.password}</div>
                <div>Authentication message : {this.state.authMessage}</div>
                <div>
                    <input type="text" placeholder="Enter your login" onChange={this.onLoginChange}/>
                </div>
                <div>
                    <input type="password" placeholder="Enter your password" onChange={this.onPasswordChange}/>
                </div>
                <div>
                    <input type="button" value="Login" onClick={this.authenticate}/>
                </div>
            </div>            
        );
    }
}