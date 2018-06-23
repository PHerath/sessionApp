const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.send('From api routeg');
   console.log('From api route');
});

module.exports = router;