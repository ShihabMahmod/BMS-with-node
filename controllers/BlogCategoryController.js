const BlogCategory = require('../models/blogCategory');

const index = async(req,resp)=>{
    const blogCategories = await BlogCategory.find({});
    resp.render('blogCategories',{Categories:blogCategories});
}
const create = async(req,resp)=>{
    resp.render('createBlogCategory');
}
const store = async(req,resp)=>{
    try {
        const name = req.body.name;
        const status = req.body.status;
        const blogCategory = new BlogCategory({
            name : name,
            status:status
        });
        await blogCategory.save();
        resp.redirect('/blog-categories');
        
    } catch (error) {
        console.log(error.message);
    }
}
const destroy = async(req,resp)=>{
    try {
        await BlogCategory.deleteOn({_id : req.params.id});
        resp.redirect('/blog-categories');
        
    } catch (error) {
        
    }
}

module.exports ={
        index,
        create,
        store,
        destroy
}