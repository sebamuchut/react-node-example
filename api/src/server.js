const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const routes = require('./routes/index')

app.use(morgan('dev'))

app.use(cors());
app.use(express.json())

app.use('/', routes)

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
    console.log(`server running on port ${app.get('port')}`)
})