import axios from 'axios';

class Request {
    get(url) {
        return axios.get(url);
    }
}

export default Request;