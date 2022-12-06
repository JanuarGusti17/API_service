const express = require('express')
const router = express.Router()
const UsersModel = require('../models/users')

router.get('/', async(req, res)=> {
    const users = await UsersModel.findAll()
    res.status(200).json({
        data: "PWL Backend",
        metadata: "Test user endpoint"
    })
})
router.post('/', async(req,res)=>{
    const {nip, nama, password} = req.body

    const users = await UsersModel.create({
        nip, nama, password
    })
    res.status(200).json({
        data: users,
        metadata:"Test post endpoint"
    })
})

router.put('/', async(req,res)=>{
    const {nip, nama, password, passwordBaru} = req.body

    const userData = await UsersModel.findOne({
        where: {nip: nip}
    })

    console.log(userData)

    if (userData.password === password){
        const users = await UsersModel.update({
            nama, password: passwordBaru
        },{
            where: {nip: nip}
        })
    
        res.status(200).json ({
            userData
        })
    } else {
         res.status(400).json({
         error:"data invalid"
        })
    }
})

module.exports = router