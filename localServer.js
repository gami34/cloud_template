var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/dwelli')
db = mongoose.connection;

db.once('open', ()=>{console.log('Dwelli DB is now connected')});
db.on('error',(err)=>{console.log('an error occured connecting to Dwelli db')})

exports.db = db;