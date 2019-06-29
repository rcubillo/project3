import axios from 'axios';
export const KEY = 'AIzaSyBADqFjIt1Gvi1ekp44B8seYRoxQd60-4s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})