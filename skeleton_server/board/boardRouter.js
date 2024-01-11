const express = require('express');
const router = express.Router();
const boardDAO = require('./boardDAO');

// 유저 요청이 들어오면 실행..
router.get('/boardList', function (req, res, next) {
  console.log('boardRouter, boardlist.........');
  boardDAO.boardlist((resp) => {
    res.json(resp);
  });
});

router.post('/insert', function (req, res, next) {
  console.log('boardRouter, insert..........');
  const data = req.body;
  boardDAO.insert(data, (resp) => {
    res.json(resp);
  });
});

router.get('/board/:id', function (req, res, next) {
  console.log('board router, board.........');
  const data = req.params;
  console.log(data);
  boardDAO.board(data, (resp) => {
    res.json(resp);
  });
});

router.post('/delete/:id', function (req, res, next) {
  console.log('boardRouter, delete..........');
  const id = req.params.id;
  boardDAO.delete(id, (resp) => {
    res.json(resp);
  });
});

router.post('/update', function (req, res, next) {
  console.log('boardRouter, update..........');
  const data = req.body;
  boardDAO.update(data, (resp) => {
    res.json(resp);
  });
});

module.exports = router;
