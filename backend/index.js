import express from "express";
import { PORT } from "./config.js";
import { initDatabase } from "./models/index.js";

initDatabase();
const app = express();
app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Hello World!')
});