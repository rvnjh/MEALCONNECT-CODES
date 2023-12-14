const express = require('express')
const app = express();
const cors = require('cors');

const tempRoutes = require('./routes/api/temperature.js');

app.use(express.json({
    extend:false
}));

app.use(cors()); 

app.use('/admin_tb',tempRoutes);

app.get('/',(req, res)=> res.send('API RUNNING, NO Error'));

const PORT = process.env.PORT || 2023;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
