import React from 'react';

export default class Home extends React.PureComponent
{
    state = {
        cars : []
    }

    render(){
        return (
            <h1>Home page</h1>
        );
    }
}