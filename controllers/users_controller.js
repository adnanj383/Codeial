module.exports.profile = function(req,res){
    return res.render('users',{
        title: "Users"
    });
}

/*what I wrote for posts_controller.js
/*module.exports.posts = function(req,res){
    res.end('<h1>Post</h1>');
}*/