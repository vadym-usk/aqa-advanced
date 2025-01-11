const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
const url2 = 'https://jsonplaceholder.typicode.com/users/1';

async function fetchTodo(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("HTTP status code is not expected: " + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error("fetchTodo error:", error.message);
        throw error;
    }
}

async function fetchUser(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("HTTP status code is not expected: " + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error("fetchUser error:", error.message);
        throw error;
    }
}

const promiseAll = await Promise.all([fetchTodo(url1), fetchUser(url2)]);
console.log("Promise.all: \n", promiseAll);

const promiseRace = await Promise.race([fetchTodo(url1), fetchUser(url2)]);
console.log("Promise.race: \n", promiseRace);