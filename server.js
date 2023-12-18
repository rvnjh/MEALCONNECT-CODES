const express = require('express');
const cors = require('cors');
const jwt_token = require('jsonwebtoken');
const app = express();



const admin_admin_route = require('./routes/Admin.api/Info_Personal/signup_admin.js');
const admin_user_route = require('./routes/Admin.api/Info_Personal/signup_users.js');
const admin_adcred_route = require('./routes/Admin.api/Authentication/login_admin.js');
const admin_uscred_route = require('./routes/Admin.api/Authentication/login_user.js');
const user_acc_route = require('./routes/Users.api/acc_user.js');


app.use(express.json({ extended: false }));
app.use(cors());

app.use('/api_admin_stu', admin_admin_route);
app.use('/api_admin_cou', admin_user_route);
app.use('/login_cred_stu', admin_adcred_route);
app.use('/login_cred_cou', admin_uscred_route);
app.use('/acc_stu', user_acc_route);


app.get('/',(req, res)=> res.send('API RUNNING, NO Error'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
