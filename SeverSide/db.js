const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lmsdb', (err) => {
   if(!err) {
      console.log('DataBase connection succussed...');
   }
   else {
      console.log('Database connection failed..!' + JSON.stringify(err, undefined, 2));
   }
});

module.exports = mongoose;