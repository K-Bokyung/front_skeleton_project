import React, { useCallback, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BoardList = () => {
  const navigate = useNavigate();

  const [boardList, setBoardList] = useState({ status: '', message: '', data: [] });

  const getBoardList = useCallback(async () => {
    const resp = await axios.get('http://localhost:8000/boards/boardList');
    setBoardList(resp.data);
  }, []);

  useEffect(() => {
    getBoardList();
  }, [getBoardList]);

  return (
    <main id='main'>
      {/* <!-- ======= Intro Single ======= --> */}
      <section className='intro-single'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-8'>
              <div className='title-single-box'>
                <h1 className='title-single'>게시물 목록</h1>
                <span className='color-text-a'>board list</span>
              </div>
            </div>
            <div className='col-md-12 col-lg-4'>
              <nav aria-label='breadcrumb' className='breadcrumb-box d-flex justify-content-lg-end'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <a href='#'>Home</a>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    Properties Grid
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className='property-grid grid'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>타이틀</th>
                    <th>이름</th>
                    <th>작성일</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {boardList.data.map((board) => (
                    <tr key={board.id}>
                      <td>{board.id}</td>
                      <td>
                        <Link to={'/board/detail/' + board.id}>{board.title}</Link>
                      </td>
                      <td>{board.name}</td>
                      <td>{board.createAt}</td>
                      <td>{board.cnt}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className='text-end'>
                      <button
                        className='btn btn-primary btn-sm'
                        onClick={() => navigate('/board/insert')}
                      >
                        ADD
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BoardList;
