//Private Routes, which will be directed only once user is verified with token

const router = require('express').Router();
// const verify = require('./verifyToken');
const auth = require("../middleware/auth")


router.get('/',auth , (req,res) => {
    res.send(req.user);
    
    
});

module.exports = router;