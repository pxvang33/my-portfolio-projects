const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "projects";`
    pool.query(queryText).then((result) => {
        console.log('in result', result.rows);
        res.send(result.rows);
        // res.sendStatus(200);
    }).catch((error) => {
        console.log('in error', error);
    })
});



module.exports = router;