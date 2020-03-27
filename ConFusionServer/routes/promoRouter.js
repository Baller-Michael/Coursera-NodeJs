const express = require('express');
const bodyParser = require('body-parser');


const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end("will send all promo to you");
    })
    .post((req, res, next) => {
        res.end('will add new promo: ' + req.body.name + " with ditails: " + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /promo");
    })
    .delete((req, res, next) => {
        res.end("deleting all promo to you");
    });


promoRouter.route('/:promoId')
    .get((req, res, next) => {
        res.end("will send ditails of the promo: " + req.params.promoId + 'to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported on /promo/" + req.params.promoId);
    })
    .put((req, res, next) => {
        res.write("Updating promo: " + req.params.promoId + '/n');
        res.end("Will update the promo: " + req.body.name + 'with details ' + req.body.description)
    })
    .delete((req, res, next) => {
        res.end("deleting promo: " + req.params.promoId);
    });
module.exports = promoRouter;