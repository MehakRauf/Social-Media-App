import { connect } from "../connection.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const register = (req, res) => {
    console.log("Request Body:", req.body);

    // Check if the user already exists
    let q = "SELECT * FROM users WHERE username = ?";
    connect.query(q, [req.body.username], (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Database error during user check", details: err });
        }

        if (data.length) {
            return res.status(400).json("User already exists!"); // Better to return 400 for user already exists
        }

        // Hash the password
        const salt = bcryptjs.genSaltSync(10);
        const hashedPass = bcryptjs.hashSync(req.body.password, salt);

        // Insert new user into the database
        q = "INSERT INTO users (username, password, email, name) VALUES (?)";
        const values = [
            req.body.username,
            hashedPass,
            req.body.email,
            req.body.name
        ];

        connect.query(q, [values], (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Database error during user insertion", details: err });
            }

            return res.status(201).json("User has been created.");
        });
    });
};

const login = (req, res) => {
    const q = "select * from users where username = ? ";
    connect.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length == 0) return res.status(404).json("User not found!");

        const checkPass = bcryptjs.compareSync(req.body.password, data[0].password);
        if (!checkPass) return res.status(400).json("Invalid username or password!");

        const token = jwt.sign({ id: data[0].id }, "secretkey");

        const { password, ...others } = data[0];

        res
            .cookie("accesstoken", token, {
                "httpOnly": true
            })
            .status(200)
            .json(others);
    })
}
const logout = (req, res) => {
    res.clearCookie("accesstoken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("User has logged out");
}

export { login, logout, register };