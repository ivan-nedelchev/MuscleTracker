import React, { useEffect, useState } from 'react';
import './home.css';
const Home = () => {
    return (
        <div className='header'>
            <h2>The number one fitness tracker</h2>
            <h6>Track your progress</h6>
            <h6>Create a workout schedule</h6>
            <h6>Find new exercises or add your own</h6>
        </div>
    )
}
export default Home;

// let currentUser = "";

// const [username, setUsername] = useState("");
// useEffect(() => {
    //     let getUser = async () => {
        //         let user = await fetch("http://localhost:5555/")
        //         let username = (await user.json()).username
        //         setUsername(username)
//         currentUser = username;
//     }
//     getUser()
// },[currentUser])