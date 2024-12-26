import React from 'react';
import './Stories.scss';

const Stories = () => {
    const stories = [
        {
            id: 1,
            name: "Mehak Fatima",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yi8lUjKNVqmWkbY2plqdttxFpzC2Efcq0g&s"
        },
        {
            id: 2,
            name: "Mehak Fatima",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yi8lUjKNVqmWkbY2plqdttxFpzC2Efcq0g&s"
        },
        {
            id: 3,
            name: "Mehak Fatima",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yi8lUjKNVqmWkbY2plqdttxFpzC2Efcq0g&s"
        },
        {
            id: 4,
            name: "Mehak Fatima",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yi8lUjKNVqmWkbY2plqdttxFpzC2Efcq0g&s"
        },

    ]
    return (
        <div className='stories'>
            <div className="story">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yi8lUjKNVqmWkbY2plqdttxFpzC2Efcq0g&s" alt="" />
                <span>Mehak Fatima</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div key ={story.id} className="story">
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                    {console.log(story.name)}
                </div>
            ))}
        </div>
    )
}

export default Stories