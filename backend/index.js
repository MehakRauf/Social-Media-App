import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

import authRoutes from './routes/auths.js'
// import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
// import commentRoutes from "./routes/comments.js";
// import likeRoutes from "./routes/likes.js";
// import relationshipRoutes from "./routes/relationships.js";

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
})
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("APi is working perfectly!")
})

app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes); 
app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/likes", likeRoutes);
// app.use("/api/relationships", relationshipRoutes);

app.listen(4500, () => {
    console.log("API is listening!");
})