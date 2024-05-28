//Aqui va las definicion de APIs

const express = require('express')
const path = require('path')
const fs = require('fs')
const Archivo = path.join(__direname, "../../json/movies.json")
//permitir manejar as rutas URL
const ruta = express.Router()

//declarar una funcion para leer el archivo
// con esto voy a simular que estoy leyendo una base de datos
const leerDatos = () => {
    let rawData = fs.readFileSync(Archivo)
    let Datos = JSON.parse(rawData)
    return Datos
}

//APi para leer todo el archivo
ruta.get('/findAll', async(req,res)=> {
    console.log("invocando a finAll")
    Datos = await leerDatos()
    //mime-type
    res.set ("Content","application/json")
    res.json(Datos)
})

