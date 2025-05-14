import { useParams, Link } from 'react-router-dom';
import NoticeData from './NoticeData';
import '../css/NoticeDetail.css';

function NoticeDetail() {
  const { id } = useParams();
  const currentId = parseInt(id);
  const notice = NoticeData.find(n => n.id === currentId);

  if (!notice) {
    return (
      <div className='error'>
        <h1>존재하지 않는 공지입니다.</h1>
        <Link to="/notice"><button>목록으로 돌아가기</button></Link>
      </div>
    );
  }

  const prevNotice = NoticeData.find(n => n.id === currentId - 1);
  const nextNotice = NoticeData.find(n => n.id === currentId + 1);

  return (
    <div>
    <h1>공지사항</h1>
      <div className='notice-content'>
        <br/>
        <h2>{notice.title}</h2>
        <div className='notice-meta'>{notice.date} | 작성자: {notice.writer}</div>
        <p>{notice.content}</p>
      </div>

      <div className="postNav">
        <div className="postRow">
          <div className="label">이전</div>
          <div className="content">
            {prevNotice ? (
              <Link to={`/notice/${prevNotice.id}`}>{prevNotice.title}</Link>
            ) : (
              <span>이전 글이 없습니다.</span>
            )}
          </div>
          <div className="date">{prevNotice ? prevNotice.date : ''}</div>
        </div>

        <div className="postRow">
          <div className="label">다음</div>
          <div className="content">
            {nextNotice ? (
              <Link to={`/notice/${nextNotice.id}`}>{nextNotice.title}</Link>
            ) : (
              <span>다음 글이 없습니다.</span>
            )}
          </div>
          <div className="date">{nextNotice ? nextNotice.date : ''}</div>
        </div>
      </div>

      <div className='noticelist'>
        <Link to="/notice"><button>목록</button></Link>
      </div>
    </div>
  );
}

export default NoticeDetail;
