import '../styles/App.css'

function App() {
    return (
        <div className='App'>
            <div className='header'>
                <h3 style={{fontWeight : "bolder"}}>
                    Whale CLASS
                </h3>
            </div>
            <div className='nav'>
                <button>게시판</button>
                <button>등록</button>
            </div>
            <div className='outer'>
                <br />
                <h2>공지사항</h2>
            </div>
        </div>
    )
}

export default Announcement;