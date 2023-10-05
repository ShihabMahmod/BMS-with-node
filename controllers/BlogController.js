
 const Category = require('../models/blogCategory');
 const blog = require('../models/blog');

const index = async(req,resp)=>{
    resp.render('blogs');
}

const create = async(req,resp)=>{

    const blogCategory = await Category.find({});
    resp.render('createBlog',{category:blogCategory});
}
const store = async(req,resp) => {
  
    try {
        const category = req.body.Category;
        const title = req.body.title;
        const descriotion = req.body.destination;
        const image = req.file.filename;

        const blogStore = new blog({
            category : category,
            title : title,
            description : descriotion,
            image : image
        });

         await blogStore.save();
        resp.redirect('/blogs');
        
        
    } catch (error) {
       console.log("fhsdfhusdf");
    }

}
module.exports = {
    index,
    create,
    store,
}