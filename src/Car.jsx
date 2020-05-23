import React from 'react';

export default class Car extends React.PureComponent {
    render() {
        return (
            <div>
                <span>{this.props.brand}</span>
                <span>{this.props.model}</span>
            </div>
        );
    }
}