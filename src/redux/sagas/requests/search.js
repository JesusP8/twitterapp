import axios from 'axios'

export async function requestPerformSearch(keyword) {

    return axios.request({
        method: "get",
        url: `https://backendjtwitter.herokuapp.com/search/${keyword}`
    });
}