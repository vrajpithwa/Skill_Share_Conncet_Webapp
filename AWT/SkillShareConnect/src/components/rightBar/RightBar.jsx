import "./rightBar.scss";


const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="/upload/vraj.jpeg"
                alt=""
              />
              <span>Vraj Pithwa</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="/public/upload/vraj.jpeg"
                alt=""
              />
              <span>Darshan Padia</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="/public/upload/vraj.jpeg"
                alt=""
              />
              <span>Sharma</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="/public/upload/vraj.jpeg"
                alt=""
              />
              <span>Kaushal</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="/public/upload/vraj.jpeg"
                alt=""
              />
              <p>
                <span>Sharma</span> just shared the post
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="/public/upload/vraj.jpeg"
                alt=""
              />
              <div className="online" />
              <span>Darshan Padia</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="/public/upload/vraj.jpeg"
                alt=""
              />
              <div className="online" />
              <span>Kaushal</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="/public/upload/vraj.jpeg"
                alt=""
              />
              <div className="online" />
              <span>Sharma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;