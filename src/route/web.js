import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

//app là express app; init mang nghĩa khởi tạo
const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/about', (req, res) => {
        res.send('I am Naibee!')
    })
    
    return app.use('/', router)
}

// module.exports = initWebRoute;
export default initWebRoute;