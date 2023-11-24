const Inventory = require('../models/Inventory.server.model') //Schema Model inventory
const fs = require("fs")


// @ Begin Inventory -- 
exports.list_all_dbs = async (req, res) => {
    try {
        const inventory = await Inventory.find({});
        res.json(inventory);
    } catch (error) {
        console.log(error)
        res.status(500).send({ "Server Error :": error })
    }
}

// exports.delete_all_dbs = async (req, res) => {
//     try {
//         // @Inventory
//         await Inventory.deleteMany();
//         const path = require("path");

//         const directory = "./upload_image/";

//         await fs.readdir(directory, (err, files) => {
//             if (err) throw err;

//             for (const file of files) {
//                 fs.unlink(path.join(directory, file), (err) => {
//                     if (err) throw err;
//                 });
//             }
//         });

//         res.status(200).send({
//             "status": "deleted all,",
//         });

//     } catch (err) {
//         console.log(err)
//         res.status(500).send({ "Server Error :": err })
//     }
// }


exports.create_a_db = async (req, res) => {
    try {
        var data = req.body;
        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
          }
          
        const itemid = randomIntFromInterval(1000, 9999)  
        var inventory = await Inventory.findOne({ itemid })

        data.itemid = itemid

        // @ check data inventory
        if (inventory) {
            return res.send("Already have itemid!").status(400)
        }

        if (req.file) {
            data.image = req.file.filename
        }

        //@next
        inventory = new Inventory(data)
        await inventory.save()

        res.status(201).send({
            "status": "created",
            "payload": data
        });

    } catch (err) {
        console.log(err)
        res.status(500).send({ "Server Error :": err })
    }
};

exports.read_a_product_user = async (req, res) => {
    try {
        const userName = req.params.userName;
        const inventory = await Inventory.find({ "username": userName });
        res.status(200).send({
            "status": "ok",
            "inventory": inventory
        });

    } catch (err) {
        console.log(err)
        res.status(500).send({ "Server Error :": err })
    }
}

exports.read_a_db = async (req, res) => {
    try {
        const itemID = parseInt(req.params.itemID);
        const inventory = await Inventory.findOne({ "itemid": itemID });
        res.status(200).send({
            "status": "ok",
            "inventory": inventory
        });

    } catch (err) {
        console.log(err)
        res.status(500).send({ "Server Error :": err })
    }
}


// exports.update_a_db = async (req, res) => {
//     try {
//         var user = req.body;
//         const { personalID } = user
//         const paramsPersonalID = parseInt(req.params.personalID);
//         var inventory = await Inventory.findOne({ "personalID": paramsPersonalID })
//         var checkuser = await Inventory.findOne({ personalID })

//         if (checkuser && personalID != paramsPersonalID) {
//             return res.status(400).send("Already personalID")
//         }


//         // @ check data user
//         if (inventory) {
//             if (req.file) {
//                 user.photo = req.file.filename
//             }
//             if (user.personalID != paramsPersonalID) {
//                 if (inventory.photo != "noimage.jpg") {
//                     await fs.unlink('./upload_image/' + inventory.photo, (err) => {
//                         if (err) {
//                             console.log(err)
//                         }
//                         else {
//                             console.log("deleted success!!")
//                         }
//                     })
//                 }
//             } else
//                 if (user.personalID == paramsPersonalID && inventory.photo.slice(-4, -1) + inventory.photo.slice(-1) != user.photo.slice(-4, -1) + user.photo.slice(-1)) {
//                     if (inventory.photo != "noimage.jpg") {
//                         await fs.unlink('./upload_image/' + inventory.photo, (err) => {
//                             if (err) {
//                                 console.log(err)
//                             }
//                             else {
//                                 console.log("deleted success!!")
//                             }
//                         })
//                     }

//                 }
//             await Inventory.updateOne({ 'personalID': paramsPersonalID }, {
//                 "$set": {
//                     personalID: parseInt(user.personalID),
//                     fname: user.fname,
//                     lname: user.lname,
//                     old: parseInt(user.old),
//                     sex: user.sex,
//                     height: parseFloat(user.height),
//                     weight: parseFloat(user.weight),
//                     SYSmmHg: parseFloat(user.SYSmmHg),
//                     DIAmmhg: parseFloat(user.DIAmmhg),
//                     PULmin: parseFloat(user.PULmin),
//                     photo: user.photo,
//                 }
//             });
//             res.status(200).send({
//                 "status": "ok",
//                 "message": "User with personalID = " + paramsPersonalID + " is updated",
//                 "user": user
//             });

//         } else {
//             res.send({
//                 "status": "error",
//                 "message": "No personalID = " + paramsPersonalID
//             })
//         }

//     } catch (err) {
//         console.log(err)
//         res.status(500).send({ "Server Error :": err })

//     }
// }

exports.delete_a_db = async (req, res) => {
    try {
        const itemID = parseInt(req.params.itemID);
        const userName = req.params.userName;
        var inventory = await Inventory.findOne({ "itemid" : itemID, "username" : userName  })

        // @ check data inventory
        if (inventory) {
            await Inventory.deleteOne({ 'itemid': itemID, 'username': userName });
            if (inventory?.image) {
                await fs.unlink('./upload_image/' + inventory.image, (err) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("deleted success!!")
                    }
                })
            }
            res.status(200).send({
                "status": "ok",
                "message": "item with ID = " + itemID + " is deleted"
            });

        } else {
            res.status(400).send({
                "status": "error",
                "message": "No item = " + itemID
            });
        }

    } catch (err) {
        console.log(err)
        res.status(500).send({ "Server Error :": err })
    }
}

// @ end inventory