const getPool = require('../common/pool');

// 이곳에 필요한 sql 등록..
const sql = {
  boardList: 'SELECT * FROM board',
  insert: 'INSERT INTO board (name, title, content) VALUES (?, ?, ?)',
};

const boardDAO = {
  // 게시물 조회 요청이 들어왔을 때 router 에 의해 실행.. dbms
  boardlist: async (callback) => {
    let conn = null;
    try {
      console.log('boardlist try 시작');
      conn = await getPool().getConnection();
      const [resp] = await conn.query(sql.boardList, []);
      console.log('boardlist callback 완료');
      callback({ status: 200, message: 'OK', data: resp });
    } catch (error) {
      console.log('dao boardlist error');
      return { status: 500, message: '조회 실패', error: error };
    } finally {
      console.log('dao boardlist finally');
      if (conn !== null) conn.release();
    }
  },
  insert: async (item, callback) => {
    const { name, title, content } = item;
    let conn = null;
    try {
      console.log('insert try 시작');
      conn = await getPool().getConnection();
      const [resp] = await conn.query(sql.insert);
      callback({ status: 200, message: 'OK', data: resp });
      console.log(resp, 'insert callback 완료');
    } catch (error) {
      return { status: 500, message: '게시물 입력 실패', error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
};

module.exports = boardDAO;
