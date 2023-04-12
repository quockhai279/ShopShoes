import express from "express";
import homeController from '../controller/homeController';
import userController from '../controller/userController'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers);

    // router.get('/detail/user/:id', homeController.getDetailCRUD);

    router.get('/about', (req, res) => {
        res.send('Hello World!')
    })

    return app.use('/', router)
}

module.exports = initWebRoute;