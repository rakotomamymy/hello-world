import React from 'react';
import Car from './Car';

export default class Home extends React.PureComponent
{
    state = {
        cars : [
            { id: 1, brand: 'VW', model: 'Caddy' },
            { id: 2, brand: 'Suzudi', model: 'Celerio' }
        ]
    }

    logOut = () => {
        this.props.history.push('/Login/');
    };

    render(){
        return (
            <div>
                <div>
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