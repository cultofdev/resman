const express = require('express');
const cors = require('cors');
const app = express();

require('./shared/config/db')

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const personRoutes = require('./routes/persons');
app.use('/api/person', personRoutes);

const addressRoutes = require('./routes/address');
app.use('/api/address', addressRoutes);

const carRoutes = require('./routes/cars');
app.use('/api/car', carRoutes);

const stockRoutes = require('./routes/stocks');
app.use('/api/stock', stockRoutes);

app.listen(PORT, () => console.log(`server started in port ${PORT}`));