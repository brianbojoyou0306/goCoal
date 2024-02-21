const mongoose = require("mongoose");

const coalmines = new mongoose.Schema({
	id:{type:String,
        },	
	coaltype:{
        type: String, required: true
    },
    avlStocks:{
        type:Number,
    }
});

module.exports = mongoose.model("CoalMines", coalmines);