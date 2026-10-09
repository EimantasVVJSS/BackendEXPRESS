const express = require('express');
const app = express()
const fs = require('node:fs');

const port = 3000


const userdata = {
    name: 'John',
    age: 32,
    gender: 'male'
};

let rawG = fs.readFileSync('./data/games.json')
let gamesG = JSON.parse(rawG)
// console.log(gamesG)

let rawB = fs.readFileSync('./data/books.json')
let gamesB = JSON.parse(rawB)
// console.log(gamesB)

let rawM = fs.readFileSync('./data/movies.json')
let gamesM = JSON.parse(rawM)
// console.log(gamesM)

app.get('/test', function(req, res) {
  res.json(gamesB);
});

app.get('/test2', function(req, res) {
  res.json(gamesG);
});

app.get('/test3', function(req, res) {
  res.json(gamesM);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// fs.readFile('.  /data/games.js', 'utf-8', (err, data)=> {
//     if (err) {
//         console.error(err)
//         return
//     }
//     app.get('/test', function(req, res) {
//     res.json(games);
// });
// })

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
