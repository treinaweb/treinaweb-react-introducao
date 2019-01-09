const api = 'http://localhost:3002/api/react-cursos/';

export const ApiService = {
    get(endpoint){
        return fetch(`${api}${endpoint}`)
            .then(response => response.json());
    },
    post(endpoint, data){
        return fetch(`${api}${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json());
    },
    delete(endpoint, id){
        return fetch(`${api}${endpoint}?id=${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json());
    }
}