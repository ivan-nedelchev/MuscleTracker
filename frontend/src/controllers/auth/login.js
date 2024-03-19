import { post } from "../../api"
let path = '/login';

async function loginUser(username, password) {
    let response = await post(path, {username, password})

    return response 
        ? true : false;
}

export {
    loginUser,
}