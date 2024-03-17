import { post } from "../../api"
let path = '/login';

function loginUser(username, password) {
    post(path, {username, password})
}

export {
    loginUser,
}