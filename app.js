require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// ## Use my enviremont variable - 5000 or 3000 (by using the commond "export Port=5000") ## //
const port = process.env.PORT || 3000;
// ## Use the .env file to hide our name + password in the database-key connection ## //

const apiRoutes = require('./routes/apiRoutes');

// ## Middleware ## //
app.use((req, res, next) =>{
    console.log(req.url, '-> New req');
    next();
})
app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRoutes);

// app.use('/login', login);
// app.use('/chefs', allChefs);
// app.use('/meals', allMeals);
// app.use('/restuarants', allRestuarants);
// app.use('/popular', popularRes);
// app.use('/signature', signatureMeals);
// app.use('/resbychef', resByChef);
// app_1.use('/api', app);

// * My port * //
app.listen (port ,err => {
    if (err) {
        return console.log('EROOR:', err);
    }
    console.log(`Listening on port ${port}`);
});

// ## Connect to Compass DB ## //
mongoose.connect(
    "mongodb://localhost:27017/epicure", { useUnifiedTopology: true }, () => console.log('-- Restuarants DB --')
);