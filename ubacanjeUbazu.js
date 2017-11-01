var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myObj = {name: "Company Inc", address : "Highway 25"};
    db.collection("customers").insertOne(myObj, function(err, res) {
        if (err) throw err;
        console.log("Ubacen jedan red");
        db.close();
    });
});