import moment from "moment";
import { connect } from "../connection.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) {
        console.error("No token found in cookies.");
        return res.status(401).json("User not logged in!");
    }

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) {
            console.error("JWT Verification Error:", err);
            return res.status(403).json("Token is not valid!");
        }

        const query = `
            SELECT p.*, u.id AS userId, u.name, u.profilePic 
            FROM posts AS p 
            JOIN users AS u 
            ON u.id = p.userId
            LEFT JOIN relationships AS r
            ON p.userId = r.followedUserId
            WHERE r.followerUserID = ? 
            OR p.userId = ?
            ORDER BY p.createdAt DESC
        `;

        connect.query(query, [userInfo.id, userInfo.id], (err, data) => {
            if (err) {
                console.error("Database Error:", err);
                return res.status(500).json({ message: "An error occurred while retrieving posts." });
            }
            return res.status(200).json(data);
        });
    });
};

export const addPost = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) {
        console.error("No token found in cookies.");
        return res.status(401).json("User not logged in!");
    }

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) {
            console.error("JWT Verification Error:", err);
            return res.status(403).json("Token is not valid!");
        }

        const query = `
            INSERT INTO posts (\`desc\`, img, createdAt, userId)
            VALUES (?, ?, ?, ?)
        `;
        const values = [
            req.body.desc,
            req.body.img,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            userInfo.id
        ];

        connect.query(query, values, (err, data) => {
            if (err) {
                console.error("Database Error:", err);
                return res.status(500).json({ message: "An error occurred while adding the post." });
            }
            return res.status(200).json("Post has been created!");
        });
    });
}