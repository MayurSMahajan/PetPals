const router = require('express').Router();
const verifyController = require('../controllers/verifyController');

router.get('/getcode', verifyController.getCode);
router.get('/verifycode', verifyController.verifyCode);

module.exports = router;