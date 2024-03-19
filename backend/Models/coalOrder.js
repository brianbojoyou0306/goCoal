const mongoose = require("mongoose");

const coalmines = new mongoose.Schema({
	plantid:{type:String,
        },
    mineid:{type:String,
        },	
    reqStock:{
        type: Number,
    },
	coaltype:{
        type: String,
    },
    Date:{
        type:Date,
    },
    Status:{
        type:Boolean,
    }

});

module.exports = mongoose.model("coalOrder", coalOrder);