import React from 'react';
import './Post.scss';
import Posts from '../post/Posts';

const Post = () => {
    const posts = [
        {
            id: 1,
            name: "Mehak Fatima",
            userId: 1,
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yi8lUjKNVqmWkbY2plqdttxFpzC2Efcq0g&s",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, error?",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxc6LifmVV2y_hUNP6RvotH2sd4ljWoHyuQ&s"
        },
        {
            id: 2,
            name: "Mehak Fatima",
            userId: 2,
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yi8lUjKNVqmWkbY2plqdttxFpzC2Efcq0g&s",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, error?",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxc6LifmVV2y_hUNP6RvotH2sd4ljWoHyuQ&s"
        }

    ]
    return (
        <div className="posts">
            <div>
                {posts.map(post => (
                    <Posts post={post} key={post.id} />
                ))}
            </div>
        </div>
    )
}

export default Post