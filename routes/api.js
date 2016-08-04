var express = require('express');
var router = express.Router();

var indexHandler = require('../controllers/indexHandler');
var mSaveHandler = require('../controllers/mSaveHandler');
var mGetHandler = require('../controllers/mGetHandler');
var mPutHandler = require('../controllers/mPutHandler');
var mPatchHandler = require('../controllers/mPatchHandler');
var mDeleteHandler = require('../controllers/mDeleteHandler');
var getStatsHandler = require('../controllers/getStatsHandler');


router.get('/',indexHandler);
router.post('/measurements', mSaveHandler);
router.get('/measurements/:timestamp', mGetHandler);
router.put('/measurements/:timestamp',mPutHandler);
router.patch('/measurements/:timestamp', mPatchHandler);
router.delete('/measurements/:timestamp', mDeleteHandler);
router.get('/stats/:params', getStatsHandler);

module.exports = router;
