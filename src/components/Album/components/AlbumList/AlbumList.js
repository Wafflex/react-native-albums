import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumListService from '../../service';
import AlbumDetail from '../AlbumDetail/AlbumDetail';

class AlbumList extends Component {

    state = { albums: [] };


    async componentWillMount() {
        this.service = new AlbumListService();
        this.setState({ albums: await this.service.index()});
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;