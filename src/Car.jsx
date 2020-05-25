import React from 'react';
import PropTypes from 'prop-types';

export default class Car extends React.PureComponent {    

    static propTypes = {
        brand: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired
    }

    render() {
        const {brand, model} = this.props;
        return (
            <div>
                <span>{brand}</span>
                <span>{model}</span>
            </div>
        );
    }
}