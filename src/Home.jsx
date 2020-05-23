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

    render(){
        return (
            <div>
                <h3>List of all my cars</h3>
                {this.state.cars.map(
                    car => <Car key={car.id} brand={car.brand} model={car.model}/>
                )}
            </div>
        );
    }
}