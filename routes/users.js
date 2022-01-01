const express = require('express');
const router = express.Router();

router.route('/login').get((req,res)=>{
res.send('this is user login')
}).post();

router.route('/signup').get((req,res)=>{
    res.send('this is user sign up')
}).post();

router.route('/:id').get((req,res)=>{
    res.send( 'this is user profile of '+ req.params.id);
})


module.exports = router;