// @Begin Login---
const bcrypt = require('bcrypt'); // @import เข้ารหัส
const Users = require('../models/Users.server.model') //Schema Model


exports.login = async (req, res) => {
    try {
        //@check user
        const { username, password } = req.body
        var user = await Users.findOneAndUpdate({ username }, { new: true })
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).send("Password Invalid!!!")
            }

            //@ payload
            var payload = {
                user: {
                    username: user.username,
                    avatar: user.avatar
                }
            }
            //@ Generate
                res.json(payload )
        }else{
            return res.status(400).send("User not found!!")
        }


    } catch (err) {
        console.log(err)
        res.status(500).send({ "Server Error :": err })
    }
}

exports.register = async (req, res) => {
    try {

        var data = req.body
        var user = await Users.findOne({ "username": data.username })

        // @ Check User
        if (user) {
            return res.send("Existing User").status(400)
        }

        //@ upload avatar
        if (req.file){
            data.avatar =  req.file.filename
            // console.log(req.file.filename)
        }
        //
        //@ Encrypt
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(data.password, salt)
        user = new Users({
            "fnamelname": data.fnamelname,
            "mail": data.mail,
            "phonenumber": data.phonenumber,
            "username" : data.username,
            "password": password,
            "avatar": data.avatar
        })
        //
        await user.save()

        res.send({
            "status": "Account Created !!"
        }).status(200)

    } catch (err) {
        console.log(err)
        res.status(500).send({ "Server Error :": err })
    }
}

exports.CheckcurrentUser = async (req,res) =>{
    try{
        const userName = req.params.userName;
        const user = await Users.findOne({"username": userName})
        .select('-password')
        .exec()

        res.send(user)

    }catch(err){
        console.log(err)
        res.status(500).send({ "Server Error :": err })
    }

}


