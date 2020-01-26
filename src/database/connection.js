const mongoose = require('mongoose');
const db_name = 'api';
const url_local = 'mongodb://localhost/' + db_name;
// const url_distant = 'mongodb://localhost/' + db_name;

// Paramèters of connection
mongoose.connect(url_local, {useNewUrlParser: true, useUnifiedTopology: true});

// Connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB");
    
    // const Cat = mongoose.model('Cat', { name: String });
    // const kitty = new Cat({ name: 'Zildjian' });

    // kitty.save().then(() => console.log('meow'));
});


