class PromiseAll {
    fetchTodo(url) {
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

    fetchUser(url) {
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

    fetchAll(url1, url2) {
        const promiseAll = Promise.all([this.fetchTodo(url1), this.fetchUser(url2)]);
        promiseAll
            .then(result => {
                console.log("Promise.all: \n", result);
            })
            .catch(error => {
                console.error("Promise.all error:", error.message);
            });
        return promiseAll;
    }
}

class PromiseRace extends PromiseAll {
    async fetchRace(url1, url2) {
        try {
            const promiseRace = await Promise.race([this.fetchTodo(url1), this.fetchUser(url2)]);
            console.log("Promise.race: \n", promiseRace);
            return promiseRace;
        } catch (error) {
            console.error("Promise.race error:", error.message);
        }
    }
}

const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
const url2 = 'https://jsonplaceholder.typicode.com/users/1';

const promiseAll = new PromiseAll();
promiseAll.fetchAll(url1, url2);

const promiseRace = new PromiseRace();
promiseRace.fetchRace(url1, url2);