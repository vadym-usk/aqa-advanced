const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const url = 'https://jsonplaceholder.typicode.com/posts';
const mock = new MockAdapter(axios);

async function fetchWithHeadersAndParams(url) {
    try {
        const response = await axios.get(url, {
            headers: {
                'Accept-Encoding': 'gzip, deflate, br, zstd',
                'Cache-Control': 'no-cache'
            },
            params: {
                postId: 1,
                postOrder: 2
            },
        });
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

describe('Task 2: Testing Request Headers and Params', () => {
    afterEach(() => {
        mock.reset();
    });

    test('GET posts with headers and params', async () => {
        mock.onGet(url).reply(config => {
            expect(config.headers['Accept-Encoding']).toBe('gzip, deflate, br, zstd');
            expect(config.headers['Cache-Control']).toBe('no-cache');

            expect(config.params.postId).toBe(1);
            expect(config.params.postOrder).toBe(2);

            return [200];
        });

        const response = await fetchWithHeadersAndParams(url);
        expect(response.status).toEqual(200);
    })
})