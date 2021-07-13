import React, { Component } from 'react';

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    
    render() {
        return (
            <h1 className="text-4xl sm:text-2xl text-white text-center text-thin mx-auto mt-5 mb-0">Home Colleagues</h1>
        )
    }
}

export default Header