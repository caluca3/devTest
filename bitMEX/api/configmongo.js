const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const uri = "mongodb+srv://carlos22:<password>@cluster0.tfl1o9y.mongodb.net/test";

app.listen(3000, () => {
    MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
        if(err) throw err;
        console.log("Conexión exitosa a MongoDB");
    });
});
