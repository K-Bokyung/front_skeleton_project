import React, { useCallback, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BoardDetail = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState({
    name: '',
    content: '',
    title: '',
    cnt: '',
    createAt: '',
  });

  const { id } = useParams();

  const getBoard = async () => {
    const resp = await axios.get('http://localhost:8000/boards/board/' + id);
    setContent(resp.data.data);
  };

  const deleteBoard = async (id) => {
    // 버튼 클릭시에 호출되어.. 서버에 매개변수 데이터 삭제되게 요청..
    await axios.post('http://localhost:8000/boards/delete/' + id);
    // 삭제후 화면 목록으로 자동 전환..
    navigate('/board/list');
  };

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <main id='main'>
      {/* <!-- ======= Intro Single ======= --> */}
      <section className='intro-single'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-8'>
              <div className='title-single-box'>
                <h1 className='title-single'>게시물 상세</h1>
                <span className='color-text-a'>board</span>
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
              <table className='table'>
                <tbody>
                  <tr>
                    <td>타이틀</td>
                    <td>{content.title}</td>
                  </tr>
                  <tr>
                    <td>내용</td>
                    <td>{content.content}</td>
                  </tr>
                  <tr>
                    <td>작성일</td>
                    <td>{content.createAt}</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className='text-end'>
                      <button
                        type='button'
                        className='btn btn-primary btn-sm'
                        onClick={() => navigate('/board/list')}
                      >
                        목록
                      </button>{' '}
                      <button
                        type='button'
                        className='btn btn-warning btn-sm'
                        onClick={() => navigate('/board/update/' + content.id)}
                      >
                        수정
                      </button>
                      <button
                        type='button'
                        className='btn btn-warning btn-sm'
                        onClick={() => deleteBoard(content.id)}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default BoardDetail;
