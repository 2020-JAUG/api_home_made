const express = require("express");
const app = express();
const port = 3000;
const db = require("./db.js");
const router = require("./router");

//Middleware
app.use(express.json());
app.use(router);

//Conecting to the database
db.then(() => {
    //Start server
    app.listen(port, () => console.log(`Node server runing on http://localhost:${port}`));
})
.catch((err) => console.log(err.message));