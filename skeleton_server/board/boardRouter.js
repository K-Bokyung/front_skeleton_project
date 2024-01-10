const express = require('express');
const router = express.Router();
const boardDAO = require('./boardDAO');
const { login } = require('../user/userDAO');

// 유저 요청이 들어오면 실행..
router.get('/list', function (req, res, next) {
  console.log('board router, signup.........');
  const data = req.body;
  if (login) {
    boardDAO.boardlist(data, (resp) => {
      res.send(resp);
    });
  } else {
    window.alert('로그인을 해야 합니다.');
  }
});

module.exports = router;
