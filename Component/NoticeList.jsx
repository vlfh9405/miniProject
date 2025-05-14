import NoticeData from './NoticeData';
import { Link } from "react-router-dom";
import '../css/NoticeList.css'

function NoticeList(){
    return(
        <div>
            <h1>공지사항</h1>
            <table className="Notices">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>작성자</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {NoticeData.map((notice)=>(
                        <tr key={notice.id}>
                            <td>{notice.id}</td>
                            <td>
                                <Link to = {`/notice/${notice.id}`}>{notice.title}</Link>
                      
                            </td>
                            <td>{notice.date}</td>
                            <td>{notice.writer}</td>
                            <td>{notice.views}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='button-group'>
                <div className='arrow'>
                    <button> ◁ </button>
                </div>        
                <div className='bottonBar'>        
                        <button> 1 </button>
                        <button> 2 </button>
                        <button> 3 </button>
                </div>        
                <div className='arrow'>
                    <button> ▷ </button>
                </div>     
            </div>    
        </div>
    );
}

export default NoticeList;