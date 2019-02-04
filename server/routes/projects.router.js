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

router.post('/', (req, res) => {
    // post route which recieves feedbackReview information that was sent
    // sends info to sql server and stores it there
    // console.log('in /projects POST:', req.body);
    const project = req.body;
    const queryText = `INSERT INTO "projects" ("name", "description", "website", "github", "date_completed", "tag_id")
                        VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(queryText, [project.projectName, project.description, project.website, project.github, project.date, project.tag])
        .then((responseFromDatabase) => {
            console.log('in responseFromDatabase', responseFromDatabase);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error in POST /projects', error);
            res.sendStatus(500);
        });
})

router.delete('/:id', (req, res) => {
    const project = req.params
    const queryText = 'DELETE FROM "projects" WHERE id=$1;';
    pool.query(queryText, [project.id])
        .then((responseFromDatabase) => { 
            console.log('in responseFromDatabase', responseFromDatabase);
            res.sendStatus(200); 
        }) .catch((error) => {
            console.log('Error completing DELETE projects query', error);
            res.sendStatus(500);
        });
});

module.exports = router;