const getPool = require('../common/pool');

// 이곳에 필요한 sql 등록..
const sql = {
  boardList: 'SELECT * FROM board',
  insert: 'INSERT',
};

const boardDAO = {
  // 게시물 조회 요청이 들어왔을 때 router 에 의해 실행.. dbms
  boardlist: async (callback) => {
    let conn = null;
    try {
      console.log('try 시작');
      conn = await getPool().getConnection();
      const [resp] = await conn.query(sql.boardList, []);
      console.log(resp, 'callback 완료');
      callback({ status: 200, message: 'OK', data: resp });
    } catch (error) {
      console.log('dao boardlist error');
      return { status: 500, message: '조회 실패', error: error };
    } finally {
      console.log('dao boardlist finally');
      if (conn !== null) conn.release();
    }
  },
  // insert: async (item, callback) => {},
};

module.exports = boardDAO;
