import express from "express";
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud/:id', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);


    router.get('/about', (req, res) => {
        res.send('Hello World!')
    })

    return app.use('/', router)
}

module.exports = initWebRoute;