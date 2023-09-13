import {httpRequest} from '@/helpers/httpClient.js';

function getAllContainersInfo() {
    return httpRequest.get('/containers')
}

function pingServerResquest() {
    return httpRequest.get('/ping')
}

export {getAllContainersInfo, pingServerResquest}