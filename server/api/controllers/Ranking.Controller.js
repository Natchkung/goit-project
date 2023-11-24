// @Begin Ranking---
const Users = require('../models/Users.server.model') //Schema Model

exports.Ranking = async (req,res) =>{
    try{
        
        var ID = 1
        const ranking = await Users.find({})
        const rankinged = ranking.map((result) => {
            return{
                username: result.username,
                trees: result.trees
            }
        })
        rankinged.sort(function(a, b) {
            return b.trees - a.trees;
        });

        for (var i = 0; i < rankinged.length; i++) {
            rankinged[i].ID = ID++
        }


        res.send(rankinged)

    }catch(err){
        console.log(err)
        res.status(500).send({ "Server Error :": err })
    }

}


