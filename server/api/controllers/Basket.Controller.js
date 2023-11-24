// @Begin Ranking---
const Baskets = require('../models/Besket.server.model') //Schema Model
const Inventory = require('../models/Inventory.server.model') //Schema Model inventory

exports.Create_Baskets = async (req,res) =>{
    try{
        
        var data = req.body;
        const { targetid,username } = req.body
        var baskets = await Baskets.findOne({ username,targetid })

        // @ check data bakets
        if (baskets) {
            return res.send("Already have Basket!").status(400)
        }
        //@next
        baskets = new Baskets(data)
        await baskets.save()

        res.status(201).send({
            "status": "created basket",
            "payload": data
        });


    }catch(err){
        console.log(err)
        res.status(500).send({ "Server Error :": err })
    }

}

exports.Get_Baskets = async (req, res) => {
    try{
        
        const userName = req.params.userName;
        var baskets = await Baskets.find({ 'username': userName })
        const basketsID = baskets.map((result) => {
            return{
                itemid: result.targetid
            }
        })
        var GetBasketed = []
        for (var i = 0; i < basketsID.length; i++) {
            console.log(basketsID[i].itemid)
            var getbaskets = await Inventory.find({ 'itemid': basketsID[i].itemid })
            GetBasketed.push(getbaskets)
        }



        res.status(200).send({
            "status": "geted basket",
            "payload": GetBasketed
        });


    }catch(err){
        console.log(err)
        res.status(500).send({ "Server Error :": err })
    }
}


