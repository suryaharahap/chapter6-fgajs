require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routers/route');
const port = process.env.PORT || 3000;

app.use('/images', express.static('public/images'));
app.use('/files', express.static('public/files'));

app.use('/', router);

app.listen(port, () => {
  console.log(`check already live and well at port ${port}`);
});
