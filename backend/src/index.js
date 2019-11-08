const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const server = require('http').Server(app);
const io = require('socket.io')(server);

const route = require('./routes');

mongoose.connect(
  'mongodb+srv://test-crud:omni123456@omnistack-rxmpz.gcp.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(route);

server.listen(3333, () => {
  console.log('server started on port 3333');
});
