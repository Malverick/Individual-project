let express = require('express');
let router = require('./routes/item-routes')
const cors = require('cors');
let app = express();

app.use(cors())
app.use(express.json());
app.use((req, res, next) => {
    console.log('Loading...');
    next();
});
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/dndchars', router);

app.listen(8080); 

module.exports = app;