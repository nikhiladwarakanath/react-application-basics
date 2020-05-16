import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID nXMyDYCSE__efWUcXRaqG2Y6X7CXuZ9KhkjPfxdhN3k'
    }
});