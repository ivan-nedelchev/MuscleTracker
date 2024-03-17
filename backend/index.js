import express from "express";
import { PORT } from "./config.js";
import { initDatabase } from "./models/index.js";

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
})
