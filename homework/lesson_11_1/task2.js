const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
const url2 = 'https://jsonplaceholder.typicode.com/users/1';

function fetchTodo(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP status code is not expected: " + response.status);
            }
            return response.json();
        })
        .catch(error => {
            console.error("fetchTodo error:", error.message);
            throw error;
        });
}

function fetchUser(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP status code is not expected: " + response.status);
            }
            return response.json();
        })
        .catch(error => {
            console.error("fetchUser error:", error.message);
            throw error;
        });
}

const promiseAll = Promise.all([fetchTodo(url1), fetchUser(url2)]);
promiseAll
    .then(result => {
        console.log("Promise.all: \n", result);
    })
    .catch(error => {
        console.error("Promise.all error:", error.message);
    });

const promiseRace = Promise.race([fetchTodo(url1), fetchUser(url2)]);
promiseRace
    .then(result => {
        console.log("Promise.race: \n", result);
    })
    .catch(error => {
        console.error("Promise.race error:", error.message);
    });