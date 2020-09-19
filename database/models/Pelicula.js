const { sequelize } = require(".");

module.exports= function(sequelize,dataTypes){
    const Pelicula= sequelize.define('Pelicula', {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrements: true,
        },
        title: dataTypes.STRING,
        rating: dataTypes.DECIMAL,
        release_date: {
            type: dataTypes.STRING,
            defaultValue: "2020-01-01"
        } 
    },
    {
        tableName:'movies',
        timestamps: false,
    })
    return Pelicula
}