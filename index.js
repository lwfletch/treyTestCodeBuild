let express = require('express');
let bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('welcome to the API');
});

app.get('/healthcheck', (req, res) => {
    res.json('API is up and running');
});

let server = app.listen(8080, function () {
   let port = server.address().port
   console.log("Listening at port %s", port)
})


module.exports = app;