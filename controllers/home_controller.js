module.exports.home = function(req,res){
    
    return res.render('home',{
        title: "Home"
    });
}
/*Ye hamne try kara tha chalanhi
modeule.exports.actionName = function(req,res){
    return res.end('Ye hua kya?');
}*/