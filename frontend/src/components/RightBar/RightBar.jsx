import React from 'react'
import './RightBar.scss'

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6Kr5FeQazaH6kBysSvz1pc1WPJ8KcXyb0A&s" alt="" />
              <span>Ali Ahmed</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_MwceypOMrtS17mQM4AjzME13zkZ2WaQnQ&s" alt="" />
              <span>Dua</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_MwceypOMrtS17mQM4AjzME13zkZ2WaQnQ&s" alt="" />
              <p>
                <span>Dua</span> changed their cover photo!
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_MwceypOMrtS17mQM4AjzME13zkZ2WaQnQ&s" alt="" />
              <p>
                <span>Zainab</span> liked a photo!
              </p>
            </div>
            <span>12 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_MwceypOMrtS17mQM4AjzME13zkZ2WaQnQ&s" alt="" />
              <p>
                <span>Soha</span> commented!
              </p>
            </div>
            <span>50 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_MwceypOMrtS17mQM4AjzME13zkZ2WaQnQ&s" alt="" />
              <p>
                <span>Palwasha</span> posted a video!
              </p>
            </div>
            <span>55 min ago</span>
          </div>
        </div>
        <hr />
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_MwceypOMrtS17mQM4AjzME13zkZ2WaQnQ&s" alt="" />
              <div className="online" />
              <span>Palwasha</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_MwceypOMrtS17mQM4AjzME13zkZ2WaQnQ&s" alt="" />
              <div className="online" />
              <span>Zainab</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_MwceypOMrtS17mQM4AjzME13zkZ2WaQnQ&s" alt="" />
              <div className="online" />
              <span>Soha</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_MwceypOMrtS17mQM4AjzME13zkZ2WaQnQ&s" alt="" />
              <div className="online" />
              <span>Noor</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_MwceypOMrtS17mQM4AjzME13zkZ2WaQnQ&s" alt="" />
              <div className="online" />
              <span>Fatima</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_MwceypOMrtS17mQM4AjzME13zkZ2WaQnQ&s" alt="" />
              <div className="online" />
              <span>Sobia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar