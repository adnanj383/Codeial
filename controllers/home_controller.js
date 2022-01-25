module.exports.home = function(req,res){
    console.log(req.cookies);
    res.cookie('user_id',25);
    return res.render('home',{
        title: "Home"
    });
}
/*Ye hamne try kara tha chala nhi
modeule.exports.actionName = function(req,res){
    return res.end('Ye hua kya?');
}*/