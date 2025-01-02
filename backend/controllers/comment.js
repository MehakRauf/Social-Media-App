import { connect } from "../connection.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getComments = (req, res) => {
    const q = `SELECT c.*, u.id AS userId, 
    name, profilePic FROM comments AS c 
    JOIN users AS u ON (u.id = c.userId)
    WHERE c.postId = ? ORDER BY c.createdAt DESC
    `;

    connect.query(q, [req.query.postId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};


export const addComment = (req, res) => {
    console.log(req.body)
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
            INSERT INTO comments (\`desc\`, createdAt, userId, postId)
            VALUES (?, ?, ?, ?)
        `;
        const values = [
            req.body.desc,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            userInfo.id,
            req.body.postId
        ];

        connect.query(query, values, (err, data) => {
            if (err) {
                console.error("Database Error:", err);
                return res.status(500).json({ message: "An error occurred while adding the comment." });
            }
            return res.status(200).json("Comment has been created!");
        });
    });
};
