const axios = require('axios');

axios.interceptors.request.use((config) => {
    console.log("Request:", {
        url: config.url,
        method: config.method,
        data: config.data,
        headers: config.headers,
    });
    return config;
}, (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    console.log("Response:", {
        url: response.url,
        status: response.status,
        data: response.data,
    });
    return response;
}, (error) => {
    if (error.response) {
        console.error("Response Error:", {
            url: error.response.url,
            status: error.response.status,
            data: error.response.data,
        });
    }
    return Promise.reject(error);
});

describe("Test Suite with 5 requests", () => {
    test("GET posts", async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        expect(response.status).toEqual(200);
        response.data.forEach((data) => {
            expect(data).toHaveProperty("userId");
            expect(data).toHaveProperty("id");
            expect(data).toHaveProperty("title");
            expect(data).toHaveProperty("body");
        });
    })

    test("POST posts", async () => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts",
            {
                "title": "foo",
                "body": "bar",
                "userId": 11
            },
            {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            })
        expect(response.status).toEqual(201);
        expect(response.data.title).toEqual("foo");
        expect(response.data.body).toEqual("bar");
        expect(response.data.userId).toEqual(11);
    })

    test("GET users", async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        expect(response.status).toEqual(200);
        response.data.forEach((data) => {
            expect(data).toHaveProperty("id");
            expect(data).toHaveProperty("name");
            expect(data).toHaveProperty("username");
            expect(data).toHaveProperty("email");
            expect(data).toHaveProperty("address");
            expect(data).toHaveProperty("phone");
            expect(data).toHaveProperty("website");
            expect(data).toHaveProperty("company");
        });
    })

    test("POST users", async () => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/users",
            {
                "name": "Name",
                "username": "Username",
                "email": "email@gmail.com"
            })
        expect(response.status).toEqual(201);
        expect(response.data).toHaveProperty("name");
        expect(response.data).toHaveProperty("username");
        expect(response.data).toHaveProperty("email");
    })

    test("GET todos", async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        expect(response.status).toEqual(200);
        response.data.forEach((data) => {
            expect(data).toHaveProperty("completed");
            expect(data).toHaveProperty("id");
            expect(data).toHaveProperty("title");
            expect(data).toHaveProperty("userId");
        });
    })
})