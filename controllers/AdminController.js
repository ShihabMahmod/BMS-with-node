
const index = async(req,resp)=>{
    resp.render('index');
}

const blogs = async(req,resp)=>{
   resp.render('blogs');
}

const create = async(req,resp)=>{
    resp.render('createBlog');
}

module.exports = {
    index,
    blogs,
    create,
}