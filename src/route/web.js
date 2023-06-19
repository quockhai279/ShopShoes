import express from "express";
import homeController from '../controller/homeController';
import userController from '../controller/userController';
import doctorController from '../controller/doctorController';
import productController from '../controller/productController';
import productListController from '../controller/productListController';
import categoryController from '../controller/categoryController';
import productTypeController from '../controller/productTypeController';
import patientController from '../controller/patientController';
import specialtyController from "../controller/specialtyController";


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
    router.get('/api/get-extra-info-doctor-by-id', doctorController.getExtraInfoDoctorById)
    router.get('/api/get-profile-doctor-by-id', doctorController.getProfileDoctorById)

    //patient
    router.post('/api/patient-book-appointment', patientController.postBookAppointment);
    router.post('/api/verify-book-appointment', patientController.postVerifyBookAppointment);

    //specialty
    router.post('/api/create-new-specialty', specialtyController.createSpecialty);

    //api product
    router.get('/api/get-all-products', productController.handleGetAllProduct)
    router.post('/api/create-new-product', productController.handleCreateNewProduct)
    router.delete('/api/delete-product', productController.handleDeleteProduct)
    router.put('/api/edit-product', productController.handleEditProduct)

    //
    router.get('/api/product-list-home', productListController.getProductList)
    router.get('/api/get-product-detail-by-id', productListController.getProductDetailById)
    // router.get('/api/product-list-home-page', productListController.getProductListLimit)

    //api product category
    router.get('/api/get-all-category', categoryController.handleGetAllProductCategory)
    router.post('/api/create-new-category', categoryController.handleCreateNewCategory)
    router.delete('/api/delete-product-category', categoryController.handleDeleteProductCategory)
    router.put('/api/edit-product-category', categoryController.handleEditProductCategory)

    //api type of product
    router.get('/api/get-all-product-type', productTypeController.handleGetAllProductType)
    router.post('/api/create-new-product-type', productTypeController.handleCreateProductType)
    router.delete('/api/delete-product-type', productTypeController.handleDeleteProductType)
    router.put('/api/edit-product-type', productTypeController.handleEditProductType)



    return app.use('/', router)
}

module.exports = initWebRoute;