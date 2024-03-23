import express from "express";
import { PORT } from "./config.js";
import { initDatabase } from "./models/index.js";
import { User } from "./models/schemas/User.js";
import bcrypt from "bcryptjs";
import session from "express-session";
import cors from 'cors';

const bcryptSalt = bcrypt.genSaltSync(10);
const app = express();
initDatabase();
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(session({
    secret: 'idkWh@tToWriteH3r3',
    saveUninitialized: false,
    resave: false,
    cookie: {
        sameSite: "lax"
    }
})
);
app.use(express.json());
app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});

app.post('/login', (req, res) => {
    let session = req.session;
    if (session.user) {
        console.log(JSON.parse(session.user));
    } else {
        console.log('Bad login attempt');
        res.status(401).send();
    }
});
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        console.log('destroying session');
        if (err) {
            console.error('Error destroying session:', err);
            res.sendStatus(500); // Server error
        } else {
            console.log('clearing cookie');
            res.clearCookie('connect.sid', { path: '/', domain: 'localhost' }).send()
        }
    });
})
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const userDoc = await User.create({
        username,
        email,
        password: bcrypt.hashSync(password, bcryptSalt)
    })
    if (userDoc) {
        req.session.user = JSON.stringify({ username, email });
        res.json({ user: username })
    }
})
