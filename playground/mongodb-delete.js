const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log(err);
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b38842c32a9bac7ded77f2e')}).then((res) => {
        console.log(res);
    });

    db.collection('Users').deleteMany({name: 'Bob'}).then((res) => {
        console.log(res);
    });
});