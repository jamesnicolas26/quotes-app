import axios from 'axios';

const favQs = axios.create({
    baseURL: 'https://favqs.com/api',
  });

export { favQs };
