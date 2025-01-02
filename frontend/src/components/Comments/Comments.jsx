import React, { useState, useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';
import moment from 'moment';
import './Comments.scss';

const Comments = ({ postId }) => {
    const [desc, setDesc] = useState("");
    const { currentUser } = useContext(AuthContext);

    const { isLoading, error, data = [] } = useQuery({
        queryKey: ["comments", postId],  
        queryFn: async () => {
            const res = await makeRequest.get(`/comments?postId=${postId}`);  
            return res.data;
        },
    });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (newComment) => makeRequest.post("/comments", newComment),
        onSuccess: () => {
            queryClient.refetchQueries(["comments", postId]);  // Refetch comments after posting
        },
    });

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            mutation.mutate({ desc, postId });
        } catch (error) {
            console.error("Error posting comment:", error);
        } finally {
            setDesc("");
        }
    };

    return (
        <div className='comments'>
            <div className="write">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <input
                    type="text"
                    placeholder="Write your comment"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                />
                <button onClick={handleClick}>Post Comment</button>
            </div>

            {isLoading ? (
                <p>Loading comments...</p>
            ) : error ? (
                <p>Error loading comments.</p>
            ) : (
                data.map((comment) => (
                    <div className="comment" key={comment.id}>
                        <img src={comment.profilePic} alt="" />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">{moment(comment.createdAt).fromNow()}</span>
                    </div>
                ))
            )}
        </div>
    );
}

export default Comments;
