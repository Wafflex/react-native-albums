import React from 'react';
import { View } from 'react-native';
import Styles from './styles';

const CardSection = (props) => {

    const { container } = Styles;

    return (
        <View style={container}>
            {props.children}
        </View>
    );
};

export default CardSection;