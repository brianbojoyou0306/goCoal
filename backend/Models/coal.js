const mongoose = require("mongoose");

const coalmines = new mongoose.Schema({
	id:{type:String,
        },	
    name:{
        type: String,
    },
    location:{
        type: String,
    },
	coaltype:{
        type: String, required: true
    },
    avlStocks:{
        type:Number,
    }
});

module.exports = mongoose.model("CoalMines", coalmines);