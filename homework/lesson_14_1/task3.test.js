const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const url = 'https://test-domain123.com/posts';
const mock = new MockAdapter(axios);

async function fetchWithMock(url) {
    try {
        const response = await axios.get(url);
        return { status: response.status, data: response.data };
    } catch (error) {
        if (error.request) {
            return { status: null, message: 'Error: No response' };
        } else if (error.response) {
            return { status: error.response.status, message: 'Error: HTTP status code is ' + error.response.status };
        } else {
            return { status: null, message: 'Error: something went wrong!' + error.message };
        }
    }
}

describe('Task 3: Mocking Axios in Jest', () => {
    afterEach(() => {
        mock.reset();
    });

    test('GET mocked posts with Success result', async () => {
        mock.onGet(url).reply(200, { message: 'OK' });

        const response = await fetchWithMock(url);
        expect(response.status).toEqual(200);
        expect(response.data.message).toBe('OK');
    })

    test('GET mocked posts with Error result', async () => {
        mock.onGet(url).reply(500, { message: 'Internal Server Error' });

        const response = await fetchWithMock(url);
        expect(response.status).toEqual(500);
        expect(response.message).toBe('Error: HTTP status code is 500');
    })
})