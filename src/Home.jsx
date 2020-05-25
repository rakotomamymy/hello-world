import React, {Component} from 'react';
import Car from './Car';

export default class Home extends Component
{
    state = {
        login : '',
        cars : [
            { id: 1, brand: 'VW', model: 'Caddy' },
            { id: 2, brand: 'Suzudi', model: 'Celerio' }
        ]
    }    

    componentDidMount(){
        const login = localStorage.getItem('login');     
        this.setState({login});
    }

    logOut = () => {
        localStorage.removeItem('login');
        localStorage.setItem('isAuthenticated', 'false');
        this.props.history.push('/Login/');
    };

    render(){
        return (
            <div>
                <div className="m-2">
                    <span>{this.state.login} is connected </span>
                    <button className="btn btn-default" onClick={this.logOut}>Log out</button>
                </div>
                <div>
                    <h3>List of all my cars</h3>
                    <div className="m-2">
                    {
                        this.state.cars.map(car => <Car key={car.id} brand={car.brand} model={car.model}/>)
                    }
                    </div>                    
                </div>                
            </div>
        );
    }
}