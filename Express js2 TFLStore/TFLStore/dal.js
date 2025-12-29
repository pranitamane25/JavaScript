//database connectivity through mysql 

var mysql = require('mysql');

var dbserver = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'assessmentdb'
};

var connection = mysql.createConnection(dbserver);

connection.connect(function (err) {
    if (err) console.log("Connection error:", err);
    else console.log("Connected to MySQL!");
});

// -------------------- INSERT FUNCTION --------------------
var insertQuery = function () {

    var query = "INSERT INTO roles (id, name, lob) VALUES ?";

    var values = [
        [1, "admin", "IT"],
        [2, "teacher", "Education"],
        [3, "manager", "HR"],
        [4, "developer", "Software"],
        [5, "analyst", "Finance"]
    ];

    connection.query(query, [values], function (err, data) {

        if (err) {
            console.log("Error:", err);
        } else {
            console.log("5 Records Inserted Successfully!");
            console.log(data);
        }
    });

};


// -------------------- CALL FUNCTION --------------------
insertQuery();




var updateQuery = function(){
    var updateQuery="UPDATE roles SET name = 'teacher' WHERE id = 3";
    connection.query(updateQuery,function(err,data){

    if(err){
        console.log("error:"+ err);
    }
    else{
        console.log(data);
    }
});

}

var remove = function(){
    var removeQuery="delete from roles where id=3";
    connection.query(removeQuery,function(err,data){

    if(err){
        console.log("error:"+ err);
    }
    else{
        console.log(data);
    }
});

}

var getAll = function(){
    var getAll="select * from roles";
    connection.query(getAll,function(err,data){

    if(err){
        console.log("error:"+ err);
    }
    else{
        console.log(data);
    }
});

}
var getById = function(){
    var getById="select * from roles where id=1";
    connection.query(getById,function(err,data){

    if(err){
        console.log("error:"+ err);
    }
    else{
        console.log(data);
    }
});

}

// getAll();
// getById();
// updateQuery();
