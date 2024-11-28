import axios from "axios";

export const fetchHomeMessage = () => {
    axios.get('http://localhost:5000/api/home')
    .then(response => response.data)
    .catch(error => {
        console.error('there was an error fetching the home message',error);
        return {
            message:'error fetching home message'
        } // fallback message
    })
}

export const fetchAboutMessage = () => {
    axios.get('http://localhost:5000/api/about')
    .catch(error => {
        console.error('there was an erro fetching the about message',error);
        return{
            message:'error fetching about message'
        };  // fallback message
    })
}