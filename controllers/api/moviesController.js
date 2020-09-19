const db=require('../../database/models')
const { report } = require('../../routes')
let moviesController = {
    list: function(req, res){
        db.Pelicula.findAll()
	        .then((resultados) => {
                res.json(resultados)
            })
    },
    detalle: function(req, res){
        db.Pelicula.findByPk(req.params.id)
        .then((resultado)=>{
            res.json(resultado)
        })
    },
    create: function(req, res){
        db.Pelicula.create({
            title: req.body.title,
            rating: req.body.rating,
            release_date: req.body.release_date,
                })
        res.redirect("/peliculas")
    }
}
module.exports= moviesController