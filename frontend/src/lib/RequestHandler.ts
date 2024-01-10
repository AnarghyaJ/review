import axios, { AxiosHeaders } from 'axios'

export function getHeaders(): AxiosHeaders {
    const headers = new AxiosHeaders()
    headers.setAccept('*/*')
    headers.setAccept('application/json')
    return headers
}

export const requestGithubOAuth = () => {
    return axios({
        method: 'post',
        url: '/api/v1/oauth/github',
        data: {
            clientKey: '',
            code: ''
        },
        headers: getHeaders()
    })
}