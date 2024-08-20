const express = require("express")

const assignment = express()

assignment.listen(8000, ()=>(
    console.log("Assignment has been submitted!")
))


// Endpoint 1: Returns an array of numbers
assignment.get('/numbers', (req, res) => {
    res.json([1, 3, 7, 42, 99]);
  });
  
  // Endpoint 2: Returns an array of objects
  assignment.get('/people', (req, res) => {
    res.json([
      { name: "Alice", age: 30, occupation: "Engineer" },
      { name: "Bob", age: 25, occupation: "Designer" }
    ]);
  });
  
  // Endpoint 3: Returns an array of programming languages
  assignment.get('/languages', (req, res) => {
    res.json(["JavaScript", "Python", "Java", "C++", "Ruby"]);
  });
  
