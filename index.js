const express = require("express");
const path = require("path");
const app = express();
const PORT = 3003; 

<<<<<<< HEAD
app.use(express.json());

=======
>>>>>>> 69c2819ab83c8422d65d9287743844956acea325
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
<<<<<<< HEAD
});

/*app.post('/naruci', (req, res) => {
    const narudzba = req.body;

    console.log('Primljeni podaci: ', narudzba);

    res.send(`Vaša narudžba je uspješno zaprimljena!`);
});*/

app.post('/naruci', (req, res) => {
    const narudzba = req.body;
    const kljucevi = Object.keys(narudzba); //jesu li svi ključevi prisutni

    if (!(kljucevi.includes('id') && kljucevi.includes('naziv') && kljucevi.includes('cijena') &&
          kljucevi.includes('prezime') && kljucevi.includes('adresa') && kljucevi.includes('broj_telefona'))) {
        res.send('Niste poslali sve potrebne podatke za narudžbu!');
        return;
    }

    res.send(`Vaša narudžba za ${narudzba.naziv} ID: ${narudzba.id}, cijena: ${narudzba.cijena} je uspješno zaprimljena!`
    + `\nDetalji narudžbe: Prezime: ${narudzba.prezime}, Adresa: ${narudzba.adresa}, Broj telefona: ${narudzba.broj_telefona}`);
});
=======
});
>>>>>>> 69c2819ab83c8422d65d9287743844956acea325
