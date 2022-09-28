import axios from 'axios';

const instance=axios.create({
    baseURL: 'https://meetup-backend1.herokuapp.com'
})

export default instance;