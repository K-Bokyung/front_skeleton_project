const express = require('express');
const router = express.Router();
const boardDAO = require('./boardDAO');

// 유저 요청이 들어오면 실행..
router.get('/boardList', function (req, res, next) {
  console.log('board router, boardList.........');
  boardDAO.boardlist((resp) => {
    res.json(resp);
  });
});

// router.post('/insert', function(req, res, next) => {

// })

module.exports = router;
