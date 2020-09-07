const { sequelize } = require(".");

module.exports= function(sequelize,dataTypes){
    const Pelicula= sequelize.define('Pelicula', {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrements: true,
        },
        title: dataTypes.STRING,
    },
    {
        tableName:'movies',
        timestamps: false,
    })
    return Pelicula
}