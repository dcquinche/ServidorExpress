const express = require('express');
const app = express();

app.listen(8080, () => console.log('Listening on port 8080!'));

// 1. Products list
const products = [
    {
      "id": 1,
      "title": "new Title marcos",
      "price": 100004,
      "description": "new Description",
      "images": [
        "https://api.lorem.space/image/shoes?w=640&h=480&r=5193",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=2221",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=2672"
      ]
    },
    {
      "id": 3,
      "title": "new try",
      "price": 29,
      "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      "images": [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4308",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4555",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4493"
      ]
    },
    {
      "id": 4,
      "title": "Licensed Plastic Table",
      "price": 808,
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "images": [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6769",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6810",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=2350"
      ]
    },
    {
      "id": 5,
      "title": "Refined Plastic Shirt",
      "price": 252,
      "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "images": [
        "https://api.lorem.space/image/watch?w=640&h=480&r=9592",
        "https://api.lorem.space/image/watch?w=640&h=480&r=6436",
        "https://api.lorem.space/image/watch?w=640&h=480&r=4565"
      ]
    }
  ]

app.get('/api/products', (req, res) => {
    res.json(products);
  });


// 2. Information about the products request
app.get('/info', (req, res) => {
    let date = new Date();
    res.send(`
    <h2>Our store has info for ${products.length} products</h2> 
    <h2>${date}</h2>`);
  });


// 3. Personal Information
const person = {
    name:"Diana Carolina Quinche Velez",
    age: 25,
    email: "dcquinche@gmail.com",
    phone: "3015469863",
    address: "Cl 64BC #103-209",
    city: "Medellin",
    links: [
        {name: "LinkedIn", url: "https://www.linkedin.com/in/diana-carolina-quinche-v%C3%A9lez-06b9791b3/"},
        {name: "GitHub", url: "https://github.com/dcquinche/"}],
    skills: [
        {name: "JavaScript", level: "Intermediate"},
        {name: "React", level: "Beginner"},
        {name: "Node", level: "Beginner"},
        {name: "HTML", level: "Intermediate"}]
    
}

app.get('/about', (req, res) => {
    res.json(person);
  });