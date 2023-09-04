import httpRequest from './helper/httpRequest';

export function autoScan() {
    return httpRequest.get('/endpoint/path')
}