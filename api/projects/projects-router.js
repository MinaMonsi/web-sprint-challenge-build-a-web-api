// Write your "projects" router here!
const router = require('express').Router();
const Projects = require("./projects-model");
const { checkId } = require('./projects-middleware')


router.get('/',(req,res) =>{
   const array = [];
   Projects.get()
   .then(projects => {
       res.status(200).json(projects);
   })
   .catch(err => {
       console.log(err)
       res.send(array).json({message: "Projects not found"})
   })
    
})

router.get('/:id', async(req,res, next) =>{
    try{
        const {id} = req.params
        const project = await Projects.get(id)
        if(!project){
            res.status(404).json({
                message:"Not found",
            })
        }else{
            res.json(req.project)
            console.log(project)
        }
    }catch(err){
        next(err)
    }
})

router.post('/',(req,res,next) =>{
    const newProject = req.body
    if(!newProject || !newProject.id){
        res.status(400).json({
            message: "Please provide name and id."
        })
    } else {
        Projects.insert(newProject)
        .then(createdProject =>{
            res.json(createdProject)
        })
        .catch(err => {
            next(err)
        })
    }
})

router.put('/:id', checkId, async (req,res, next) =>{
        next()
})

router.delete('/:id', async (req,res,next) =>{
        next()
})

router.get('/:id/actions',(req,res) =>{
    
})

//error handling router
router.use((err,req,res)=>{
    res.status(500).json({
      message: err.message
    })
  })

module.exports = router
