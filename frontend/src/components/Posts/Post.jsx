import React from "react";
import { makeRequest } from "../../axios";
import { useQuery } from "@tanstack/react-query";
import "./Post.scss";
import Posts from "../post/Posts";

const Post = ({ userId }) => {
    // const { isLoading, error, data = [] } = useQuery({
    //     queryKey: ["posts", userId],
    //     queryFn: async () => {
    //         if (!userId) throw new Error("User ID is undefined");
    //         const res = await makeRequest.get(`/posts?userId=${userId}`);
    //         return res.data;
    //     },
    //     enabled: !!userId, // Only fetch if userId is valid
    // });
    // console.log(data);
    const { isLoading, error, data } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await makeRequest.get("/posts");
            return res.data;
        },
    });
    
    return (
        <div className="posts">
            {error ? (
                <p>Error: {error.message}</p>
            ) : isLoading ? (
                <p>Loading...</p>
            ) : data.length > 0 ? (
                data.map((post) => <Posts post={post} key={post.id} />)
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
};

export default Post;
