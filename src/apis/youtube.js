import axios from 'axios'
const KEY = 'AIzaSyCQm86m1gc0lwoi_FPHYWsAfGtOAVYOsYE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
     part: 'snippet',
     maxResult: 5,
     key: KEY        
    }   
})