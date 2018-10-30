const express = require('express');
const router = express.Router();

// @route   GET api/profiles/test
// @desc    Tests profiles route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "User's profiles"}));

module.exports = router;