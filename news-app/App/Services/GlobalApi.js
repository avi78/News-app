import {create} from 'apisauce'

const api = create({
    baseURL: 'https://newsapi.org/v2/',
})

const apiKey = "?country=in&apiKey=3ac1779b46cd4b858ced47e66185f15c";

const getTopHeadlines = api.get('/top-headlines'+apiKey)
const getByCategory=(category) => api.get('/everything?q='+category+"&apiKey=3ac1779b46cd4b858ced47e66185f15c")

export default {
    getTopHeadlines,
    getByCategory
}