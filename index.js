let express = require('express');
let bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('welcome to the API');
});

let server = app.listen(8080, function () {
   let port = server.address().port
   console.log("Listening at port %s", port)
})


module.exports = app;