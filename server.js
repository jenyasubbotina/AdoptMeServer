const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./api/routes/routes'));

const PORT = process.env.PORT || 5000;

const dbURI = 'mongodb+srv://master_maxim:i7KN2twFhASWHUb@cluster0.fqllj.mongodb.net/AdoptMe?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(result => {
            console.log('connected to db');
            app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
        })
        .catch(err => console.error(err));

