const router = require("express").Router();
const coalOrder = require("../Models/coalOrder")

  router.post("/", async (req, res) => {    
    try {
		
        const newReq = new coalOrder(
            {
                plantid:req.body.plantid,
                mineid:req.body.mineid,
                reqStock:req.body.reqStock,
                coaltype:req.body.coaltype,
                Date:req.body.Date,
                Status:req.body.Status

            }   
            
        )
        newReq.save().then(()=>res.status(200).send("Order Sucessfully"))
	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	} 

  })
  
  module.exports = router;
