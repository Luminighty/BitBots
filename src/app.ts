import express from "express"
import { router } from "./routes";

export const app = express();

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    console.log(req.body);
    res.send("Hello World");
});

app.get("/about", (req, res) => {
    res.send("See more at https://github.com/Luminighty/BitBots")
});