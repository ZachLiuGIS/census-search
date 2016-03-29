import React, { PropTypes } from 'react';

const Header = ({time, onButtonClick}) => (
    <div>
        <h2>Current Time: {time}</h2>
        <br/>
        <button onClick={onButtonClick}>Update Time</button>
    </div>
);

Header.propTypes = {
    time: PropTypes.string.isRequired,

    onButtonClick: PropTypes.func.isRequired
};

export default Header;