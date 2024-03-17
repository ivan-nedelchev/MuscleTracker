const url = 'http://localhost:5555';
async function request(method, path, data) {
    let options = {};
    let response;
    // let userInfo = JSON.parse(localStorage.getItem('user'));
    

    if(data) {
        options = {
            method,
            headers : {
            "Content-type" : "application/json",
            },
            body : JSON.stringify(data)
        }
        // if(userInfo) {
        //     options.headers["X-Authorization"] = userInfo.accessToken;
        // }
        response = await fetch(url + path, options);
    } else {
        // if(userInfo) {
        //     options.headers = {}
        //     options.headers["X-Authorization"] = userInfo.accessToken;
        // }
        options.method = method;
        response = await fetch(url + path, options);
        
    }
   
    if(response.status != "204") {
        return response.json()
    }
}

let get = (path) => request("GET", path);
let put = (path, data) => request("PUT", path, data);
let del = (path, data) => request("DELETE", path, data);
let post = (path, data) => request("POST", path, data);

export {
    get,
    put,
    del as delete,
    post
}