import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header/header';
import AlbumList from './src/components/Album/components/AlbumList/AlbumList';

const app = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'TaylorSwift Albums!'} />
        <AlbumList />
    </View>
    
);


AppRegistry.registerComponent('albums', () => app);
