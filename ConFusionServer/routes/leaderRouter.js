const express = require('express');
const bodyParser = require('body-parser');


const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end("will send all leader to you");
    })
    .post((req, res, next) => {
        res.end('will add new leader: ' + req.body.name + " with ditails: " + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /leader");
    })
    .delete((req, res, next) => {
        res.end("deleting all leader to you");
    });


leaderRouter.route('/:leaderId')
    .get((req, res, next) => {
        res.end("will send ditails of the leader: " + req.params.leaderId + 'to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported on /leader/" + req.params.leaderId);
    })
    .put((req, res, next) => {
        res.write("Updating leader: " + req.params.leaderId + '/n');
        res.end("Will update the leader: " + req.body.name + 'with details ' + req.body.description)
    })
    .delete((req, res, next) => {
        res.end("deleting promo: " + req.params.leaderId);
    });
module.exports = leaderRouter;