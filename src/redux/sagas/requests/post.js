import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestCreatePost(formData) {
    const token = await AsyncStorage.getItem('TOKEN')

    return axios.post('https://backendjtwitter.herokuapp.com/post', formData, { headers: { Authorization: `Bearer ${token}` } })
}

export async function requestDeletePost(id) {
    const token = await AsyncStorage.getItem('TOKEN')

    return axios.delete(`https://backendjtwitter.herokuapp.com/post/${id}`, { headers: { Authorization: `Bearer ${token}` } })
}

export function requestGetPosts() {
   
    return axios.get('https://backendjtwitter.herokuapp.com/posts')
}

export async function requestLikePost(id) {
    const token = await AsyncStorage.getItem('TOKEN')

    return axios.post(`https://backendjtwitter.herokuapp.com/like/${id}`, {}, { headers: { Authorization: `Bearer ${token}` } })
}

export async function requestRepost(id) {
    const token = await AsyncStorage.getItem('TOKEN')

    return axios.post(`https://backendjtwitter.herokuapp.com/repost/${id}`, {}, { headers: { Authorization: `Bearer ${token}` } })
}