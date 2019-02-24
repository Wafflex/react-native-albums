import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from '../../../Card/Card';
import CardSection from '../../../Card/components/CardSection/CardSection';
import Button from '../../../Button/Button';


import Styles from './styles';

const AlbumDetail = ({ album }) => {

    const { title, artist, thumbnail_image, image, url } = album;

    const { 
        headerContainer, 
        titleStyle, 
        thumbnailStyle,
        thumbnailContainer,
        albumImage
    } = Styles;

     return (
        <Card>
            <CardSection>
                <View style={thumbnailContainer}>
                    <Image 
                        style={thumbnailStyle} 
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContainer}>
                    <Text style={titleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>       
            </CardSection>
            <CardSection>
                <Image
                    style={albumImage}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy NOW!
                </Button>
            </CardSection>
        </Card>
     );
};

export default AlbumDetail;