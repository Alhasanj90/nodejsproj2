
var mongoose     = require('mongoose');


// This is the schema.  Note the types, validation and trim
// statements.  They enforce useful constraints on the data.
var PlayerSchema = new mongoose.Schema({
    name: String,
    nationality: String,
    rank: Number,
    team      : {
        previous : String,
        current  : String
    },
  age: { type: Number, min: 18}
});


module.exports = mongoose.model('Player', PlayerSchema);