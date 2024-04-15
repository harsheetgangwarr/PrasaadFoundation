import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(cookieParser());

// Limiting the length of request
app.use(
  express.json({
  })
);

// Like spaces(" ") in the URL
app.use(
  express.urlencoded({
    extended: true,
  })
);



// Assuming your backend routes are defined in a separate file
import router from "./src/Routes/user.routes.js";
app.use("/api", router);

export default app;
