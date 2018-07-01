const {MongoClient, ObjectID} = require('mongodb');
const yargs = require('yargs');

const argv = yargs.argv;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log(err);
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').find({name: `${argv.name}`}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log(err);
    });
});

