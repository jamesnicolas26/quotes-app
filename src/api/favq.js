import axios from 'axios';

//This allows for code reuse
const favq = axios.create({
  baseURL: 'https://favqs.com/api/', // root URL of the API

  //To authorize this app to use the Yelp API
  headers: {
    Authorization:
      'Bearer 04uUW6QhPLDJMyhwJbcU3PNvWKBk2pCvZuE02TwwFXK8Yfn2JGX4HW5kXPWoD5UK4bVosuhBDMeHA9kIvVIOX6Fpg0_x3L3_UHpVSuGVb1knS3SAcV6I5IlgCDhjX3Yx',
  },
});

export { favq };
