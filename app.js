const express = require('express');
const userRouter = require('./routes/user');
const morgan = require('morgan');
const parser = require('body-parser');

const app = express();
 const port = 4000;

 app.use(morgan('dev'));
 app.use(parser.json());

 app.get('/', (req,res) => {
     res.status(200).send('Hello World!')
 })

 app.use('/user', userRouter);

 app.set('port', port);
 app.listen(port, () => {
    console.log(`app is listing ${port}`)
})

module.exports = app;