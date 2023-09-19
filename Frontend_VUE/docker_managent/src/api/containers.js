import {httpRequest} from '@/helpers/httpClient.js';

function getAllContainersInfo() {
    return httpRequest.get('/containers')
}

function pingServerResquest() {
    return httpRequest.get('/ping')
}

async function postCardData(name, cardData) {
    return httpRequest.post(`/containers/updateCard/${name}`, cardData);
  }

export {getAllContainersInfo, pingServerResquest, postCardData}