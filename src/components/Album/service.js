import Request from '../../shared/request';

class AlbumService extends Request {
    index() {
        return this.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => response.data);
    }
}

export default AlbumService;