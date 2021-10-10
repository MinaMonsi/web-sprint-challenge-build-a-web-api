// add middlewares here related to projects
const checkId = (req,res,next)=>{
    if(!req.params.id){
        res.json('No project id')
    }else{
        next()
    }
}

module.exports = {
    checkId
}