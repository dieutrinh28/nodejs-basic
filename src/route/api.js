import express from "express";
import APIController from '../controllers/APIController';
let router = express.Router();

//app là express app; init mang nghĩa khởi tạo
const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers);  
    router.post('/create', APIController.createNewUser); 
   
    return app.use('/api/v1/', router)
}

// module.exports = initWebRoute;
export default initAPIRoute;