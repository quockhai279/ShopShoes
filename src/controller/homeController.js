const Router = require("express")

let getHomepage = (req, res) => {
    return res.render('index.ejs')
}

module.exports = {
    getHomepage
}