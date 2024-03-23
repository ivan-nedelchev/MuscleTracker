import { post } from "../../api"
let path = '/login';

async function loginUser(username, password) {
    let response = await post(path, { username, password })
    return response ? true : false;
}
const logoutUser = async () => {
    console.log('logging out...');
    await fetch('http://localhost:5555/logout', {
        method: 'POST',
        credentials: 'include'
    })
}
export {
    loginUser,
    logoutUser
}