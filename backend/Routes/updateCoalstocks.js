const router = require("express").Router();
const coalType = require("../Models/coal")

  router.post("/", async (req, res) => {    
    const avlstock =  {avlStocks:req.body.avlStocks}   
    try{
        const Coal =  coalType.findOneAndUpdate({ id: req.body.id },avlstock).then(()=>res.status(200).send("uploaded Sucessfully"))
	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	} 

  })
  
  module.exports = router;
