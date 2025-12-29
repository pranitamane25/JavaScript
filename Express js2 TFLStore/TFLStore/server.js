var express = require("express");
var path = require("path");
var app = express();

var credentials=require("./data/credentials.json");
var flowers=require("./data/flowers.json");
var customers=require("./data/customers.json");

var port = 3000;

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API: All flowers
app.get("/api/flowers", function (req, res) {
    res.json(flowers);
});

// API: Flower by ID
app.get("/api/flowers/:id", (request, response) => {
    let id = parseInt(request.params.id);
    let flower = flowers.find(product => product.id === id);

    if (!flower) {
        return response.status(404).send("Flower not found");
    }

    response.send(flower);
});

//HTTP post handlers---this is hardcoaded only when pranita and seed enter this will displayes corect
// app.post("/api/login", (request, response) => {

//     var user = request.body;

//     if (user.username === "pranita" && user.password === "seed") {
//         response.send("valid user");
//     } else {
//         response.send("Invalid user");
//     }

// });

//http post handler
app.post("/api/login", (request, response) => {
    const { username, password } = request.body;

    // find user from credentials
    let user = credentials.find(u =>
        u.username === username && u.password === password
    );

    if (user) {
        response.send({ message: "Valid user", id: user.id });
    } else {
        response.status(401).send({ message: "Invalid username or password" });
    }
});

//post handler
//added one flower on  existing list 
app.post("/api/flowers", (request, response) => {
    var newFlower = request.body;

    newFlower.id = flowers.length + 1;

    flowers.push(newFlower);

    response.send({ message: "Flower added successfully", flower: newFlower });
});

//DELETE handler
app.delete("/api/flowers/:id", (request, response) => {
    let id = parseInt(request.params.id);

    // find flower first
    let flower = flowers.find(f => f.id === id);
    if (!flower) {
        return response.status(404).send("Flower not found");
    }

    flowers = flowers.filter(f => f.id !== id);

    response.send("Flower is removed from collection");
});


//POST handler add new entry in customers table
app.post("/api/register",(request,response)=>{
    console.log("POST register invoked....")
    var newcustomer=request.body;
     newcustomer.id = customers.length + 1;
    customers.push(newcustomer);
    response.send("customer registration successful");
});

//GET handler --fetch all data from list
app.get("/api/customers", (req, res) => {
    res.json(customers);
});

//server side update operation for incoming HTTP put request
//PUT---update in json list
app.put("/api/customers/:id",(request,response)=>{
    var existingCustomerId=request.params.id;
    var customerToBeUpdated=request.body;
    //find the object in customer collection
    //update that object by new object into customer collection
    console.log("customer to be updated at server side");
    console.log(customerToBeUpdated);
    console.log("customer is updated");

})

//for delete handler in json

app.delete("/api/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).send({ message: "Customer not found" });
    }

    customers.splice(index, 1);
    res.send({ message: "Customer deleted", id: id });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
