import axios, {AxiosError, AxiosResponse} from "axios";
import _ from "lodash";
import {SaveAsFavouritePayload, VotePayload} from "../models/cat";
import {history} from "../layout/App";

//api configs
const responseBody = (response: AxiosResponse) => response.data;
const requestBody = (body: {}) => _.merge(body, {sub_id: sub_id})
const sub_id: string | undefined = process.env.REACT_APP_SUB_ID
axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_CATAPI_KEY

axios.interceptors.response.use(undefined, (error: AxiosError) => {
    const { data, status, config } = error.response!;
    switch (status) {
        case 400:
            console.log(data);
            break;
        case 401:
            //history.push('/unauthorized');
            break;
        case 404:
            //history.push('/not-found');
            break;
        case 500:
            //history.push('/server-error');
            break;
    }
    return Promise.reject(data);
})



const requests = {
    get: (url: string) =>
        axios
            .get(url)
            .then(responseBody),
    post: (url: string, body: {}, addSubId: boolean = true) =>
        axios
            .post(url, (addSubId) ? requestBody(body) : body)
            .then(responseBody),
    put: (url: string, body: {}) =>
        axios
            .put(url, requestBody(body))
            .then(responseBody),
    del: (url: string) =>
        axios
            .delete(url)
            .then(responseBody),
    postForm: (url: string, file: Blob) => {
        let formData = new FormData();
        formData.append('file', file);
        formData.append("sub_id", sub_id as string);
        return axios
            .post(url, requestBody(formData), {
                headers: {'Content-type': 'multipart/form-data'}
            })
            .then(responseBody);
    }
};

const Cats = {
    uploadPhoto: (file: Blob) => requests.postForm('/images/upload', file),
    loadMyImages: () => requests.get('/images?limit=100'),
    loadFavourites: () => requests.get('/favourites?limit=100'),
    saveAsFavourite: (request: SaveAsFavouritePayload) => requests.post('/favourites', request),
    vote: (request: VotePayload) => requests.post('/votes', request, false),
    listVotes: () => requests.get(`/votes?limit=1000`),
    removeFavourite: (id: string) => requests.del(`/favourites/${id}`)
};


export default {
    Cats
};