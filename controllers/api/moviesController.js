const db=require('../../database/models')
let moviesController = {
    list: function(req, res){
        db.Pelicula.findAll()
	        .then((resultados) => {
                res.json(resultados)
            })
    }
}
module.exports= moviesController