<<<<<<< HEAD
// const express = require('express');
// const app = express();
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods",
//         "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });
// app.get('/hello', (req, res) => {
//     res.send('Hello World!');
// });
//
// app.listen(process.env.PORT || 4001);
=======
const express = require('express');
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});


const mongoose = require('mongoose');
const MONGODB_URL = 'mongodb+srv://web-dev-project:web-dev-project@cluster0.zboy4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URL);

app.listen(process.env.PORT || 4001);
>>>>>>> 9d55b4c0f3de393cec31c20513f4f34d3fb050a0
