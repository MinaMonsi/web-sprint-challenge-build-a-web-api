// Write your "actions" router here!
const router = require('express').Router();
const Actions = require("./actions-model");


router.get('/',(req,res,next) =>{
    next()
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

//error handling router
router.use((err,req,res)=>{
    res.status(500).json({
      message: err.message
    })
  })

module.exports = router