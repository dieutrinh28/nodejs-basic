import express from "express";

let router = express.Router();

//app là express app; init mang nghĩa khởi tạo
const initWebRoute = (app) => {
    router.get('/', (req, res) => {
        res.render('test/index.ejs')
    })

    router.get('/about', (req, res) => {
        res.send('I am Naibee!')
    })
    
    return app.use('/', router)
}

// module.exports = initWebRoute;
export default initWebRoute;