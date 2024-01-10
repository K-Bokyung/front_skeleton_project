const express = require('express');
const router = express.Router();
const boardDAO = require('./boardDAO');
const { login } = require('../user/userDAO');

// 유저 요청이 들어오면 실행..
router.get('/boardList', function (req, res, next) {
  console.log('board router, signup.........');
  boardDAO.boardlist((resp) => {
    console.log('router');
    res.json(resp);
  });
});

module.exports = router;
