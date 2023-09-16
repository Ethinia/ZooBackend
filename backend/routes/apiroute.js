const express = require("express");

const router = express.Router();

router.get('/zoo', (req, res) => {
    res.send('get is working')
});

router.get('/zoo/search', (req, res) => {
    res.send('get search is working')
});

router.post('/zoo', (req, res) => {
    res.send('get is working')
});

router.put('/zoo', (req, res) => {
    res.send('get is working')
});

router.delete('/zoo', (req, res) => {
    res.send('get is working')
});

module.exports = router;

