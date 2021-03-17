const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MAHASISWA TEKNIK INFORMATIKA' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'TEKNIK INFORMATIKA' });
});


module.exports = router;
