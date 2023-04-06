const Router = require("express")
import db from '../models/index'
import CRUDService from '../services/CRUDService'


let getHomepage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('index.ejs', {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e)
    }
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    console.log(message)
    return res.send('hello')
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser()
    console.log(data)
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}

let getEditCRUD = async (req, res) => {
    let userId = req.params.id
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId)
        return res.render('editCRUD.ejs', {
            user: userData
        })
    }
    else {
        return res.send('User not found')
    }
}

let putCRUD = async (req, res) => {
    let data = req.body
    let allUsers = await CRUDService.updateUserData(data)
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })

}

module.exports = {
    getEditCRUD, getHomepage, getCRUD, postCRUD, displayGetCRUD, putCRUD
}