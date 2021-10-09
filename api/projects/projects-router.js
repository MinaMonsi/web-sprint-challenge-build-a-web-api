// Write your "projects" router here!
const router = require('express').Router();
const Projects = require("./projects-model");


router.get('/',(req,res) =>{
   const array = [];
   Projects.get()
   .then(projects => {
       res.status(200).json(projects);
   })
   .catch(err => {
       console.log(err)
       res.send(array).json({message: "Projects could not be retrieved"})
   })
    
})

router.get('/',(req,res,next) =>{
    next()
})

router.post('/',(req,res,next) =>{
    next()
})

router.put('/',(req,res,next) =>{
    next()
})

router.delete('/',(req,res,next) =>{
    next()
})

router.get('/',(req,res,next) =>{
    next()
})

//error handling router
router.use((err,req,res)=>{
    res.status(500).json({
      message: err.message
    })
  })

module.exports = router
