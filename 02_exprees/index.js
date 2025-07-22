import express from 'express'

const app = express();

const port = 3000

// send a response to the client

// app.get("/", (req, res ) => {
//     res.send("Hello Aman Welcome in Backend")
// })

// app.get("/login", (req, res ) => {
//     res.send("Hi you are logged in")
// })

// app.get("/git", (req, res ) => {
//     res.send("Hello Aman Welcome on GitHub")
// })


// get data from frontend

app.use(express.json());

let teaData = [];    // Array to store tea data
let nextId = 1;     // Variable to keep track of the next ID
 
app.post("/teas", (req, res) => {
 const{name,price}=req.body;
 const newTea ={      // Create a new tea object
        id: nextId++,
        name: name,
        price: price
 }
    teaData.push(newTea);     
res.status(201).send(newTea);  
})
// get all teas
app.get("/teas", (req, res) => {
 res.status(200).send(teaData);  // Send the teaData array with a 200 status code
})

// get tea by ID
app.get("/teas/:id", (req, res) => {  // find the tea by ID 
 const teaData = teaData.find((tea) => tea.id === parseInt(req.params.id));
 console.log(get);
if (!teaData) {
    return res.status(404).send({ error: "Tea not found" }) 
} else {
    res.status(200).send(teaData);
}  // Send the found tea data with a 200 status code
})

// update tea by ID
app.put("/teas/:id", (req, res) => {
 const teaId = req.params.id
  const tea = teaData.find((tea) => tea.id === parseInt(teaId));
    if (!tea) {  // If no tea is found with the given ID
        return res.status(404).send({ error: "Tea not found" });  // Send a 404 status code with an error message
    }
    const { name, price } = req.body;  // Destructure the name and price from the request body
    tea.name = name;  // Update the name of the tea
    tea.price = price;  // Update the price of the tea
    res.status(200).send(tea);  // Send the updated tea data with a 200 status code

})

// delete tea by ID
app.delete("/teas/:id", (req, res) => {
  const index = teaData.findIndex((tea) => tea.id === parseInt(req.params.id));
  if( index === -1) { 
    return res.status(404).send({ error: "Tea not found" }); 
  } 
  teaData.splice(index, 1);  // Remove the tea from the teaData array
  return res.status(204).send("Tea deleted successfully"); 

})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

})