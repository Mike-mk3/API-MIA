const express = require("express");
const app = express();
const cors = require ('cors');
app.use(express.json());
const port = 3000;
app.use (cors());





let platillos = [
    {
        id: 1,
        nombre: "huacamole",
        precio: 20.35
    }
];





app.get('/', (req, res) => {
    res.send('hello express');
});


app.get('/platillos', (req, res) => {
    res.json({
        mensaje: "platillos disponibles",
        data: platillos
    });
});


app.post('/platillos', (req, res) => {
    // console.log(req.body); =hace que se vea en consolA
    let nuevoPlatillo = req.body;
    platillos.push(nuevoPlatillo);
    res.json({
        mensaje: "se agrego el platillo:",
        data: nuevoPlatillo
    });
});


app.put('/platillos/:id', (req, res) => {
    let id = parseInt (req.params.id);
    let platilloResultado = platillos.find (platillo => platillo.id === id);
    platilloResultado.nombre = req.body.nombre;
    platilloResultado.precio = req.body.precio;
    platilloResultado.descripcion = req.body.descripcion;
    res.send('editar platillos');
});


app.delete('/platillos/:id', (req, res) => {
    let id = parseInt (req.params.id);
    const indice = platillos.findIndex (platillo => platillo.id === id);
    platillos.splice(indice,1);
    res.json ({
        mensaje: "se elimino el platillo:",
        data: id
    });
});





app.listen(port, () => {
    console.log('escuchando http://localhost:' + port);
});