import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../frontend/public/upload");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes); 
app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/likes", likeRoutes);
// app.use("/api/relationships", relationshipRoutes);

app.listen(4500, () => {
    console.log("API is listening!");
})