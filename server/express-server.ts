import * as express from "express";
import {Request, Response} from "express-serve-static-core";
import * as path from "path";


const app = express();

app.use("/", express.static(path.join(__dirname, "..", "client")));
app.use("/node_modules", express.static(path.join(__dirname, "..", "node_modules")));

const server = app.listen(8000, "localhost", () => {
    const {address, port} = server.address();

    console.log(`Listening on http://localhost:${port}`);
});
