const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('pegawai', 'root', '',{
    dialect:'mysql',
    host:'localhost'
})
 
module.exports = sequelize