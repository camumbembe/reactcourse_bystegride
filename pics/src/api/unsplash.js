import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a3aa97380ba94acd4855fdea5bfa109b213e563d7ebbc5438b21edf54a4d5d80'
    }
});