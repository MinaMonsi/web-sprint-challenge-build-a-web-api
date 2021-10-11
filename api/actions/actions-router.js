// Write your "actions" router here!
const router = require('express').Router();
const Actions = require("./actions-model");


router.get('/',(req,res) =>{
    const array = [];
    Actions.get()
    .then(actions => {
        res.status(200).json(actions);
    })
})

router.get('/:id', async(req, res) => {
    try {
        const action = await Actions.get(req.actionToBody.id)
        if(!action) {
            res.status(404).json({
                message:"Not found", 
            })
        }
    } catch (err){
        res.status(500).json({
            message: "The project with the specified ID does not exist",
            err: err.message,
            stack: err.stack,
    })
  }
})


router.post('/', (req, res) => {
    const newProject = req.body
    if (!newProject || !newProject.id) {
        res.status(400).json({
            message:'Please provide name or description.',
        })
    } else {
        Actions.insert(newProject)
        .then(createdProject =>{
            res.json(createdProject)
        })
        .catch(err => {
            res.status(500).json({
                message: "Server error",
                err: err.message,
                Stack: err.stack,
            })
        })
    }
})

router.put('/',(req,res,next) =>{
    next()
})

router.delete('/:id', async (req, res) => {
    try{
       throw new Error('sad') 
    }catch (err) {
        res.status(500).json({
            message: "Server error",
            err: err.message,
            Stack: err.stack,
        })
    }
})


//error handling router
router.use((err,req,res)=>{
    res.status(500).json({
      message: err.message
    })
  })

module.exports = router