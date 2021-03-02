import axios from 'axios';

const instance = axios.create({
    baseURL:"https://whatsappclonebackendserver.herokuapp.com",
});

export default instance;
