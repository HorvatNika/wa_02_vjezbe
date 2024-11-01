const express = require("express");
const path = require("path");
const app = express();
const PORT = 3003; 

app.listen(PORT, function() {
    console.log(`Server je pokrenut na http://localhost:${PORT}`);
}); 

/*app.get('/', function(req, res) {
    res.send('Hello, world!');
});*/
//odnosno; osnovna sintaksa
app.get('/pizza', (req, res) => {
    res.send('Ovdje su sve dostupne pizze!');
});

const pizze = [
    {id: 1, naziv: 'Margherita', cijena: 6.5},
    {id: 2, naziv: 'Capricciosa', cijena: 8.0},
    {id: 3, naziv: 'Quattro formaggi', cijena: 10.0},
    {id: 4, naziv: 'Šunka sir', cijena: 7.0},
    {id: 5, naziv: 'Vegetariana', cijena: 9.0}
];

/*app.get('/pizze/:id', (req, res) => {
    const id_pizza = req.params.id;

    for(pizza of pizze) {
        if(pizza.id == id_pizza) {
            res.json(pizza);
        }
    }
});*/

app.get('/pizze/:id', (req, res) => {
    const id_pizza = req.params.id //dohvaćamo id parametar iz URL-a

    if(isNaN(id_pizza)) {
        res.json({message: 'Proslijedili ste parametar id koji nije broj.'});
        return;
    }

    const pizza = pizze.find(pizza => pizza.id == id_pizza);

    if(pizza) {
        res.json(pizza);
    } else {
        res.json({message: 'Pizza s traženim ID-em ne postoji.'});
    }
});