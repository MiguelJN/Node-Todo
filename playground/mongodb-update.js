const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log(err);
    }
    console.log('Connected to MongoDB server');


    db.collection('Users').findOneAndUpdate({
        name: 'Miguel'
    }, {
        $set:{
            name: 'Brandon'
        }, 
        $inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
});