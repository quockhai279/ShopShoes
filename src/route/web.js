import express from "express";
import homeController from '../controller/homeController';
import userController from '../controller/userController';
import doctorController from '../controller/doctorController';
import productController from '../controller/productController';
import productListController from '../controller/productListController';
import categoryController from '../controller/categoryController';

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
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handledEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);

    router.get('/api/allcode', userController.getAllcode);

    //doctor
    router.get('/api/top-doctor-home', doctorController.getTopDoctorHome);
    router.get('/api/get-all-doctors', doctorController.getAllDoctors);
    router.post('/api/save-info-doctors', doctorController.postInfoDoctor);
    router.get('/api/get-detail-doctor-by-id', doctorController.getDetailDoctorById);
    router.post('/api/bulk-create-schedule', doctorController.bulkCreateSchedule)
    router.get('/api/get-schedule-doctor-by-date', doctorController.getScheduleByDate)

    //api product
    router.get('/api/get-all-products', productController.handleGetAllProduct)
    router.post('/api/create-new-product', productController.handleCreateNewProduct)
    router.delete('/api/delete-product', productController.handleDeleteProduct)
    router.put('/api/edit-product', productController.handleEditProduct)
    router.get('/api/product-list-home', productListController.getProductList)

    //api product category
    router.get('/api/get-all-category', categoryController.handleGetAllProductCategory)
    router.post('/api/create-new-category', categoryController.handleCreateNewCategory)
    router.delete('/api/delete-product-category', categoryController.handleDeleteProductCategory)
    router.put('/api/edit-product-category', categoryController.handleEditProductCategory)

    // router.get('/api/get-id-all-category', categoryController.handleEditProductCategory)


    return app.use('/', router)
}

module.exports = initWebRoute;