const axios = require('axios');

const wrongUrl = 'https://jsonplaceholder.typicode.com/posts1';

async function fetchWithError(url) {
    try {
        const response = await axios.get(url);
        return { status: response.status, message: 'Success: HTTP status code is ' + response.status };
    } catch (error) {
        if (error.response) {
            return { status: error.response.status, message: 'Error: HTTP status code is ' + error.response.status };
        } else {
            return { status: null, message: 'Error: something went wrong!' + error.message };
        }
    }
}

describe('Task 1', () => {
    test('GET posts with error', async () => {
        const response = await fetchWithError(wrongUrl);
        expect(response.status).toEqual(404);
        expect(response.message).toEqual("Error: HTTP status code is 404");
        expect(response.body).toEqual(undefined);
    })
})