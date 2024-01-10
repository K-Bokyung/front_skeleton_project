const getPool = require('../common/pool');

// 이곳에 필요한 sql 등록..
const sql = {
  boardList: 'SELECT * FROM board',
};

const boardDAO = {
  // 게시물 조회 요청이 들어왔을 때 router 에 의해 실행.. dbms
  boardlist: async (callback) => {
    let conn = null;
    console.log('dao');
    try {
      conn = await getPool.getConnection();
      const [resp] = await conn.query(sql.boardList);
      console.log(resp);
      callback({ status: 200, message: '게시판 데이터가 있습니다.', data: resp });
    } catch (error) {
      return { status: 500, message: '조회 실패', error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
};

module.exports = boardDAO;
