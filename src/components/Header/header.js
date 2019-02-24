import React from 'react';
import { Text, View } from 'react-native';
import Styles from './styles';

const Header = (props) => {
    
    const { textStyle, viewStyle } = Styles;
    
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

export default Header;