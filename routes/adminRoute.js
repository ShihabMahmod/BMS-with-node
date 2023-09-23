const express = require('express');
const adminRoute = express();

const bodyParser = require('body-parser');
adminRoute.use(bodyParser.json());
adminRoute.use(bodyParser.urlencoded({extended:true}));

adminRoute.set('view engine','ejs');
adminRoute.set('viewas','./views');

const multer = require('multer');
const path = require('path');

adminRoute.use(express.static("public"));

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.json(__dirname,'../public/images'))
    },
    filename:function(req,file,cb){
        const name = Date.now()+ '-' + file.originalname;
        cb(null,name);
    }
});
const upload = multer({storage:storage});

const adminController = require("../controllers/AdminController");
const blogCategoryController = require("../controllers/BlogCategoryController");

adminRoute.get('/',adminController.index);
adminRoute.get('/blogs',adminController.blogs);
adminRoute.get('/blog-create',adminController.create);

adminRoute.get('/blog-categories',blogCategoryController.index);
adminRoute.get('/create-blog-category',blogCategoryController.create);
adminRoute.post('/blog-category-store',blogCategoryController.store);
adminRoute.get("/blog-category-delete/:id",blogCategoryController.destroy);

module.exports = adminRoute;