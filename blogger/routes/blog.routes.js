module.exports = function(app){
    const blogs = require("../controllers/blog.controller");

    app.post("/blogs", blogs.create);

    app.get("/blogs", blogs.findAll);

    app.get("/blogs/:authorName", blogs.findByAuthorName);

    app.get("/blogsQuery", blogs.findByQuery);
    
    app.get("/blogId/:blogId", blogs.findOne);

    app.put("/blogs/:blogId", blogs.update);

    app.delete("/blogs/:blogId", blogs.delete);
};