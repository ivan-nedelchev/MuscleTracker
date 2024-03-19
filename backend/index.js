import express from "express";
import { PORT } from "./config.js";
import { initDatabase } from "./models/index.js";
import { User } from "./models/schemas/User.js";
import bcrypt from "bcryptjs";

const bcryptSalt = bcrypt.genSalt(10);

initDatabase();
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //fix later, allows every origin
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});
// app.get('/', (req, res) => {
//     //res.json({username : "Gosho"})
// });
app.post('/login', (req, res) => {
    console.log(req.body);   
    res.json({name: "hello"})
})
app.post('/register', async (req, res) => {
    const {username, email, password} = req.body;
    const userDoc = await User.create({
        username,
        email,
        password: bcrypt.hashSync(password, bcryptSalt)
    })
    res.json(userDoc)
})
