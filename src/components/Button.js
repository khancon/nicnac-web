// src/components/Button.js

import React from 'react';
import { Button as AntdButton } from 'antd';
import PropTypes from 'prop-types'; // Import PropTypes
import '../styles/globals.css'; // Import global styles

const CustomButton = ({ text, onClick, className = '', style }) => {
    return (
        <AntdButton className={`custom-button ${className}`} onClick={onClick} style={style}>
            {text}
        </AntdButton>
    );
};

// Define prop types
CustomButton.propTypes = {
    text: PropTypes.string.isRequired, // text is a required string
    onClick: PropTypes.func, // onClick is a function
    className: PropTypes.string, // className is a string
    style: PropTypes.object, // style is an object
};

// Define default props
CustomButton.defaultProps = {
    className: '',
    style: {},
};

export default CustomButton;
