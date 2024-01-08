const express = require ("express");
const app = express ();
const port = 3000;


let platillos = [
    {
        id: 1,
        nombre: "huacamole",
        precio: 20.35
    }
];



app.get ('/', (req, res )=> {
    res.send ('hello express');
});



app.get ('/platillos', (req, res )=> {
    res.json ({
        mensaje: "platillos disponibles",
        data: platillos
    });
});


app.post ('/platillos', (req, res )=> {
    res.send ('agregar platillos');
});

app.put ('/platillos', (req, res )=> {
    res.send ('editar platillos');
});

app.delete ('/platillos', (req, res )=> {
    res.send ('borra platillos');
});



app.listen (port, () => {
    console.log ('escuchando http://localhost:' + port);
});