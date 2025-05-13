import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
config();

const port = Number(process.env.PORT) || 8000;
const app = express();

app.use(
  cors({
    origin: [process.env.BASE_URL, `http://localhost:${port}`],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser);
app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`);
});

app.get("/", (req, res, next) => {
  return res.status(200).send("<h1>Hello world</h1>");
});
