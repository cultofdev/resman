require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(`error connecting to mongodb! ${error}`));
db.once('open', () => console.log('successfully connected to mongodb!'));

require('../../model/user.model');
require('../../model/prize.model');