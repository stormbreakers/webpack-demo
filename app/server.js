'use strict';
import express from 'express';
import http from 'http';
import fs from 'fs';
import Promise from 'bluebird';
import moment from 'fs';
import bodyParser from 'body-parser';
import Route from './src/route/route.js';

(function () {
    let app = express();
    // let http = require('http');
    // let fs = require('fs');
    // let Promise = require('bluebird');
    // let moment = require('moment');
    app.use(express.static(__dirname+'/app/'));

    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    // let bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    Route(app);
    // app.get('*', function (req, res) {
    //     res.send('Hello Joy');
    // });
    
    app.listen(3000);
    console.log("App listening on port 3000");
})();