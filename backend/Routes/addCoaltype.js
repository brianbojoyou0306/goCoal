const router = require("express").Router();
const coalType = require("../Models/coal")

  router.post("/", async (req, res) => {    
    try {
		
        const newReq = new coalType(
            {
                id:req.body.id,
                coaltype:req.body.coaltype,
            }   
            
        )
        newReq.save().then(()=>res.status(200).send("uploaded Sucessfully"))
	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	} 

  })
  
  module.exports = router;
