import axios from 'axios';

export default axios.create({
    baseURL:'http://3.16.76.30:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});
