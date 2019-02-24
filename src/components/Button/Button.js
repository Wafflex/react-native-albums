import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles from './styles';

const Button = ({ onPress, children }) => {
    const { buttonStyle, buttonText } = Styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={buttonText}>{children}</Text>
        </TouchableOpacity>
        
    );
};

export default Button;