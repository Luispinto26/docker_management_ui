import httpRequest from '@/helpers/httpClient.js';

export function autoScan() {
    return httpRequest.get('/endpoint/path')
}